import { describe, it, expect } from "vitest";
import {
  generateCommitPublishMessage,
  generatePullRequestPublishMessage,
  generatePublishUrl,
} from "../markdown.js";
import type { WorkflowData } from "../../types.js";

describe("markdown utils", () => {
  const mockWorkflowData: WorkflowData = {
    owner: "testowner",
    repo: "testrepo",
    sha: "1234567890abcdef1234567890abcdef12345678",
    ref: "main",
  };

  describe("generatePublishUrl", () => {
    it("should generate SHA-based URL in compact mode", () => {
      const url = generatePublishUrl(
        "sha",
        "https://pkg.khulnasoft.com",
        "my-package",
        mockWorkflowData,
        true
      );
      
      expect(url).toBe("https://pkg.khulnasoft.com/my-package@1234567");
    });

    it("should generate SHA-based URL in non-compact mode", () => {
      const url = generatePublishUrl(
        "sha",
        "https://pkg.khulnasoft.com",
        "my-package",
        mockWorkflowData,
        false
      );
      
      expect(url).toBe(
        "https://pkg.khulnasoft.com/testowner/testrepo/my-package@1234567"
      );
    });

    it("should generate ref-based URL in compact mode", () => {
      const url = generatePublishUrl(
        "ref",
        "https://pkg.khulnasoft.com",
        "my-package",
        mockWorkflowData,
        true
      );
      
      expect(url).toBe("https://pkg.khulnasoft.com/my-package@main");
    });

    it("should generate ref-based URL in non-compact mode", () => {
      const url = generatePublishUrl(
        "ref",
        "https://pkg.khulnasoft.com",
        "my-package",
        mockWorkflowData,
        false
      );
      
      expect(url).toBe(
        "https://pkg.khulnasoft.com/testowner/testrepo/my-package@main"
      );
    });

    it("should handle scoped packages in compact mode", () => {
      const url = generatePublishUrl(
        "sha",
        "https://pkg.khulnasoft.com",
        "@scope/package",
        mockWorkflowData,
        true
      );
      
      expect(url).toBe("https://pkg.khulnasoft.com/@scope/package@1234567");
    });

    it("should shorten URL when package name matches repo name", () => {
      const url = generatePublishUrl(
        "sha",
        "https://pkg.khulnasoft.com",
        "testrepo",
        mockWorkflowData,
        false
      );
      
      expect(url).toBe("https://pkg.khulnasoft.com/testowner/testrepo@1234567");
    });

    it("should handle different origin URLs", () => {
      const url = generatePublishUrl(
        "sha",
        "https://custom.domain.com",
        "my-package",
        mockWorkflowData,
        true
      );
      
      expect(url).toContain("https://custom.domain.com");
    });

    it("should abbreviate commit hash to 7 characters", () => {
      const url = generatePublishUrl(
        "sha",
        "https://pkg.khulnasoft.com",
        "pkg",
        mockWorkflowData,
        true
      );
      
      expect(url).toContain("@1234567");
      expect(url).not.toContain("1234567890abcdef");
    });
  });

  describe("generateCommitPublishMessage", () => {
    it("should generate message with npm install commands", () => {
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["package-a", "package-b"],
        mockWorkflowData,
        false,
        "npm",
        false
      );
      
      expect(message).toContain("npm i");
      expect(message).toContain("package-a");
      expect(message).toContain("package-b");
    });

    it("should generate message with pnpm add commands", () => {
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["package-a"],
        mockWorkflowData,
        false,
        "pnpm",
        false
      );
      
      expect(message).toContain("pnpm add");
    });

    it("should generate message with yarn add commands", () => {
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["package-a"],
        mockWorkflowData,
        false,
        "yarn",
        false
      );
      
      expect(message).toContain("yarn add");
    });

    it("should generate message with bun add commands", () => {
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["package-a"],
        mockWorkflowData,
        false,
        "bun",
        false
      );
      
      expect(message).toContain("bun add");
    });

    it("should use npx for binary applications with npm", () => {
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["cli-tool"],
        mockWorkflowData,
        false,
        "npm",
        true
      );
      
      expect(message).toContain("npx");
      expect(message).not.toContain("npm i");
    });

    it("should use pnpm dlx for binary applications with pnpm", () => {
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["cli-tool"],
        mockWorkflowData,
        false,
        "pnpm",
        true
      );
      
      expect(message).toContain("pnpm dlx");
    });

    it("should use bunx for binary applications with bun", () => {
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["cli-tool"],
        mockWorkflowData,
        false,
        "bun",
        true
      );
      
      expect(message).toContain("bunx");
    });

    it("should add .tgz extension for yarn", () => {
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["package-a"],
        mockWorkflowData,
        false,
        "yarn",
        false
      );
      
      expect(message).toContain(".tgz");
    });

    it("should include package name prefix for yarn", () => {
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["my-package"],
        mockWorkflowData,
        false,
        "yarn",
        false
      );
      
      expect(message).toContain("my-package@https://");
    });

    it("should collapse packages when more than 4", () => {
      const packages = ["pkg1", "pkg2", "pkg3", "pkg4", "pkg5"];
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        packages,
        mockWorkflowData,
        false,
        "npm",
        false
      );
      
      expect(message).toContain("<details>");
      expect(message).toContain("<summary>");
      expect(message).toContain("</details>");
    });

    it("should not collapse when 4 or fewer packages", () => {
      const packages = ["pkg1", "pkg2", "pkg3", "pkg4"];
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        packages,
        mockWorkflowData,
        false,
        "npm",
        false
      );
      
      expect(message).not.toContain("<details>");
    });

    it("should include template links", () => {
      const templates = {
        "template-a": "https://stackblitz.com/template-a",
        "template-b": "https://stackblitz.com/template-b",
      };
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        templates,
        ["package-a"],
        mockWorkflowData,
        false,
        "npm",
        false
      );
      
      expect(message).toContain("template-a");
      expect(message).toContain("template-b");
      expect(message).toContain("stackblitz.com");
    });

    it("should show default template as 'Open in StackBlitz'", () => {
      const templates = {
        default: "https://stackblitz.com/default",
      };
      const message = generateCommitPublishMessage(
        "https://pkg.khulnasoft.com",
        templates,
        ["package-a"],
        mockWorkflowData,
        false,
        "npm",
        false
      );
      
      expect(message).toContain("Open in StackBlitz");
    });
  });

  describe("generatePullRequestPublishMessage", () => {
    it("should generate PR message with ref-based URLs", () => {
      const message = generatePullRequestPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["package-a"],
        mockWorkflowData,
        false,
        false,
        "https://github.com/owner/repo/runs/123",
        "npm",
        "ref",
        false
      );
      
      expect(message).toContain("npm i");
      expect(message).toContain("@main");
    });

    it("should generate PR message with sha-based URLs", () => {
      const message = generatePullRequestPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["package-a"],
        mockWorkflowData,
        false,
        false,
        "https://github.com/owner/repo/runs/123",
        "npm",
        "sha",
        false
      );
      
      expect(message).toContain("@1234567");
    });

    it("should include commit hash link", () => {
      const checkRunUrl = "https://github.com/owner/repo/runs/123";
      const message = generatePullRequestPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["package-a"],
        mockWorkflowData,
        false,
        false,
        checkRunUrl,
        "npm",
        "ref",
        false
      );
      
      expect(message).toContain(`_commit: <a href="${checkRunUrl}"><code>1234567</code></a>_`);
    });

    it("should omit package commands when onlyTemplates is true", () => {
      const message = generatePullRequestPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["package-a"],
        mockWorkflowData,
        false,
        true,
        "https://github.com/owner/repo/runs/123",
        "npm",
        "ref",
        false
      );
      
      expect(message).not.toContain("npm i");
    });

    it("should include templates in PR message", () => {
      const templates = {
        example: "https://stackblitz.com/example",
      };
      const message = generatePullRequestPublishMessage(
        "https://pkg.khulnasoft.com",
        templates,
        ["package-a"],
        mockWorkflowData,
        false,
        false,
        "https://github.com/owner/repo/runs/123",
        "npm",
        "ref",
        false
      );
      
      expect(message).toContain("example");
      expect(message).toContain("stackblitz.com");
    });

    it("should handle compact mode", () => {
      const message = generatePullRequestPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        ["my-pkg"],
        mockWorkflowData,
        true,
        false,
        "https://github.com/owner/repo/runs/123",
        "npm",
        "ref",
        false
      );
      
      expect(message).toContain("/my-pkg@");
      expect(message).not.toContain("/testowner/testrepo/");
    });

    it("should collapse more than 4 packages in PR message", () => {
      const packages = ["p1", "p2", "p3", "p4", "p5"];
      const message = generatePullRequestPublishMessage(
        "https://pkg.khulnasoft.com",
        {},
        packages,
        mockWorkflowData,
        false,
        false,
        "https://github.com/owner/repo/runs/123",
        "npm",
        "ref",
        false
      );
      
      expect(message).toContain("<details>");
    });

    it("should use correct package manager commands in PR message", () => {
      const managers: Array<"npm" | "pnpm" | "yarn" | "bun"> = ["npm", "pnpm", "yarn", "bun"];
      
      managers.forEach((pm) => {
        const message = generatePullRequestPublishMessage(
          "https://pkg.khulnasoft.com",
          {},
          ["package-a"],
          mockWorkflowData,
          false,
          false,
          "https://github.com/owner/repo/runs/123",
          pm,
          "ref",
          false
        );
        
        if (pm === "npm") {
          expect(message).toContain("npm i");
        } else if (pm === "pnpm") {
          expect(message).toContain("pnpm add");
        } else if (pm === "yarn") {
          expect(message).toContain("yarn add");
        } else if (pm === "bun") {
          expect(message).toContain("bun add");
        }
      });
    });
  });
});