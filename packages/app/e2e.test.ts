import type { Response } from "@cloudflare/workers-types";
import type { UnstableDevWorker } from "wrangler";
import ezSpawn from "@jsdevtools/ez-spawn";
import { simulation } from "@simulacrum/github-api-simulator";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { unstable_dev } from "wrangler";

import prPullRequestSynchronizeFixture from "./fixtures/pr.pull_request.json";
import prWorkflowRunRequestedFixture from "./fixtures/pr.workflow_run.requested.json";
import pushWorkflowRunInProgressFixture from "./fixtures/workflow_run.in_progress.json";

import waitPort from "wait-port";

let server: Awaited<ReturnType<ReturnType<typeof simulation>["listen"]>>;
let workerUrl: string;
let worker: UnstableDevWorker;

beforeAll(async () => {
  // Start simulation server
  const app = simulation({
    initialState: {
      users: [],
      organizations: [{ login: "khulnasoft" }, { login: "tinylibs" }, { login: "khulnasoft" }],
      repositories: [
        { owner: "khulnasoft", name: "temporary-test" },
        { owner: "khulnasoft", name: "pkg.khulnasoft.com" },
        { owner: "tinylibs", name: "tinybench" },
        { owner: "khulnasoft", name: "sdk" },
      ],
      branches: [{ name: "main" }],
      blobs: [],
    },
  });
  server = await app.listen(3300);

  // =====
  // IMPORTANT:
  // Remove any build step here.
  // Build your project manually/CI before running tests.
  // =====

  // Launch worker in dev mode (ensure build output exists before this)
  worker = await unstable_dev(`${import.meta.dirname}/.output/server/index.mjs`, {
    config: `${import.meta.dirname}/wrangler.toml`,
    ip: "localhost",
  });

  // Compose the worker URL using worker.address and worker.port
  workerUrl = `http://${worker.address}:${worker.port}`;
  console.log(`Worker URL: ${workerUrl}`);

  await waitPort({ host: worker.address, port: worker.port });

  // Optionally: Build other packages *before* tests, outside of beforeAll
  // await ezSpawn.async(`pnpm cross-env TEST=true API_URL=${workerUrl} pnpm --filter=pkg-khulnasoft run build`, [], {
  //   stdio: "inherit",
  //   shell: true,
  // });
}, 70_000);

afterAll(async () => {
  if (server) {
    await server.ensureClose();
  }
});

describe.sequential.each([
  [pushWorkflowRunInProgressFixture],
  [prWorkflowRunRequestedFixture, prPullRequestSynchronizeFixture],
] as const)("webhook endpoints", (...fixture) => {
  const [{ event, payload }, pr] = fixture;
  const mode = pr ? "pr" : "commit";

  it(`handles ${mode} events`, async () => {
    if (pr) {
      const prResponse = await worker.fetch("/webhook", {
        method: "POST",
        headers: {
          "x-github-delivery": "d81876a0-e8c4-11ee-8fca-9d3a2baa9707",
          "x-github-event": "pull_request",
        },
        body: JSON.stringify(pr.payload),
      });
      expect(await prResponse.json()).toEqual({ ok: true });
    }

    const response = await worker.fetch("/webhook", {
      method: "POST",
      headers: {
        "x-github-delivery": "d81876a0-e8c4-11ee-8fca-9d3a2baa9707",
        "x-github-event": event,
      },
      body: JSON.stringify(payload),
    });
    expect(await response.json()).toEqual({ ok: true });
  });

  it(`publishes playgrounds for ${mode}`, async () => {
    const env = Object.entries({
      TEST: true,
      API_URL: workerUrl,
      GITHUB_SERVER_URL: new URL(payload.workflow_run.html_url).origin,
      GITHUB_REPOSITORY: payload.repository.full_name,
      GITHUB_RUN_ID: payload.workflow_run.id,
      GITHUB_RUN_ATTEMPT: payload.workflow_run.run_attempt,
      GITHUB_ACTOR_ID: payload.sender.id,
      GITHUB_SHA: payload.workflow_run.head_sha,
      GITHUB_ACTION: payload.workflow_run.id,
      GITHUB_JOB: payload.workflow_run.name,
      GITHUB_REF_NAME: pr ? `${pr.payload.number}/merge` : payload.workflow_run.head_branch,
    })
      .map(([k, v]) => `${k}=${JSON.stringify(v)}`)
      .join(" ");

    try {
      const process = await ezSpawn.async(
        `pnpm cross-env ${env} pnpm run -w publish:playgrounds`,
        [],
        {
          stdio: "overlapped",
          shell: true,
          env: { ...process.env, API_URL: workerUrl },
        },
      );
      console.log(process.stdout);
    } catch (error) {
      console.error(error);
    }
  }, 30_000);

  it(`serves and installs playground-a for ${mode}`, async () => {
    const [owner, repo] = payload.repository.full_name.split("/");
    const sha = payload.workflow_run.head_sha.substring(0, 7);
    const ref = pr?.payload.number ?? payload.workflow_run.head_branch;
    const shaResponse = await worker.fetch(`/${owner}/${repo}/playground-a@${sha}`);
    expect(shaResponse.status).toBe(200);
    const shaBlob = await shaResponse.blob();
    expect(shaBlob.size).toBeGreaterThan(0);

    const refResponse = await fetchWithRedirect(`/${owner}/${repo}/playground-a@${ref}`);
    const refBlob = await refResponse.blob();

    const shaBlobBuffer = await shaBlob.arrayBuffer();
    const refBlobBuffer = await refBlob.arrayBuffer();

    expect(shaBlobBuffer.byteLength).toEqual(refBlobBuffer.byteLength);
    expect(new Uint8Array(shaBlobBuffer)).toEqual(new Uint8Array(refBlobBuffer));

    const url = new URL(`/${owner}/${repo}/playground-a@${sha}?id=${Date.now()}`, workerUrl);
    const installProcess = await ezSpawn.async(
      `pnpm cross-env CI=true npx -f playground-a@${url}`,
      { stdio: "overlapped", shell: true },
    );
    expect(installProcess.stdout).toContain("playground-a installed successfully!");
  }, 10_000);

  it(`serves and installs playground-b for ${mode}`, async () => {
    const [owner, repo] = payload.repository.full_name.split("/");
    const sha = payload.workflow_run.head_sha.substring(0, 7);

    const response = await worker.fetch(`/${owner}/${repo}/playground-b@${sha}`);
    expect(response.status).toBe(200);
    const blob = await response.blob();
    expect(blob.size).toBeGreaterThan(0);

    const url = new URL(`/${owner}/${repo}/playground-b@${sha}?id=${Date.now()}`, workerUrl);
    const installProcess = await ezSpawn.async(
      `pnpm cross-env CI=true npx -f playground-b@${url}`,
      { stdio: "overlapped", shell: true },
    );
    expect(installProcess.stdout).toContain("playground-a installed successfully!"); // imports playground-a
    expect(installProcess.stdout).toContain("playground-b installed successfully!");
  }, 10_000);
});

describe("URL redirects", () => {
  describe("standard packages", () => {
    it("redirects full URLs correctly", async () => {
      const response = await fetchWithRedirect("/tinylibs/tinybench@a832a55");
      expect(response.url).toContain("/tinylibs/tinybench/tinybench@a832a55");
    });

    it("redirects compact URLs correctly", async () => {
      const response = await fetchWithRedirect("/tinybench@a832a55");
      expect(response.url).toContain("/tinylibs/tinybench/tinybench@a832a55");
    });
  });

  describe("scoped packages", () => {
    const expectedPath = `/khulnasoft/sdk/${encodeURIComponent("@khulnasoft/sdk")}@a832a55`;

    it("redirects full scoped package URLs correctly", async () => {
      const response = await fetchWithRedirect("/khulnasoft/sdk/@khulnasoft/sdk@a832a55");
      expect(response.url).toContain(expectedPath);
    });

    it("redirects compact scoped package URLs correctly", async () => {
      const response = await fetchWithRedirect("/@khulnasoft/sdk@a832a55");
      const redirectedUrl = new URL(response.url);
      expect(decodeURIComponent(redirectedUrl.pathname)).toContain(
        decodeURIComponent(expectedPath),
      );
    });
  });
});

async function fetchWithRedirect(url: string, maxRedirects = 999): Promise<Response> {
  const response = await worker.fetch(url, { redirect: "manual" });

  if (response.status >= 300 && response.status < 400 && maxRedirects > 0) {
    const location = response.headers.get("location");
    if (location) {
      return fetchWithRedirect(location, maxRedirects - 1);
    }
  }

  return response as unknown as Response;
}
