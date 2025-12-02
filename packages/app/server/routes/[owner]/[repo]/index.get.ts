import type { WorkflowData } from "../../../types";
import { extractOwnerAndRepo, extractRepository } from "@pkg-khulnasoft/utils";
import { getPackageManifest } from "query-registry";

type Params = Omit<WorkflowData, "sha" | "ref">;

// https://pkg.khulnasoft.com/tinylibs/tinybench@a832a55
export default eventHandler(async (event) => {
  const params = getRouterParams(event) as Params;
  const [packageName, refOrSha] = params.repo.split("@");

  // /@khulnasoft/sdk@a832a55
  if (params.owner.startsWith("@")) {
    // it's not a short url, it's a scoped package in compact mode
    const npmOrg = params.owner;
    const packageNameWithOrg = `${npmOrg}/${packageName}`;
    const manifest = await getPackageManifest(packageNameWithOrg);

    const repository = extractRepository(manifest);
    if (!repository) {
      throw createError({
        status: 404,
      });
    }

    const match = extractOwnerAndRepo(repository);
    if (!match) {
      throw createError({
        status: 404,
      });
    }
    const [owner, repo] = match;

    sendRedirect(event, `/${owner}/${repo}/${encodeURIComponent(packageNameWithOrg)}@${refOrSha}`);
    return;
  }

  // -> https://pkg.khulnasoft.com/tinylibs/tinybench/tinybench@a832a55
  sendRedirect(event, `/${params.owner}/${packageName}/${packageName}@${refOrSha}`);
});
