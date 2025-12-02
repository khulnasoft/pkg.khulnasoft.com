import {
  it,
  describe,
  expect,
  vi,
  beforeEach,
  afterEach,
  type MockInstance,
} from "vitest";
import type { PackageManifest } from "query-registry";
import * as utils from "./index.js";

describe("utils", () => {
  describe("extractOwnerAndRepo", () => {
    it("is null for URLs with trailing characters", () => {
      expect(
        utils.extractOwnerAndRepo("https://github.com/org/repo.gitpewpew"),
      ).toBeNull();
    });

    it("is null for URLs with leading characters", () => {
      expect(
        utils.extractOwnerAndRepo("pewpewhttps://github.com/org/repo.git"),
      ).toBeNull();
    });

    it("returns org and repo for valid https URLs", () => {
      expect(
        utils.extractOwnerAndRepo("http://github.com/org/repo.git"),
      ).toEqual(["org", "repo"]);
    });

    it("returns org and repo for valid http URLs", () => {
      expect(
        utils.extractOwnerAndRepo("https://github.com/org/repo.git"),
      ).toEqual(["org", "repo"]);
    });

    it("returns org and repo for valid git+https URLs", () => {
      expect(
        utils.extractOwnerAndRepo("git+https://github.com/org/repo.git"),
      ).toEqual(["org", "repo"]);
    });

    it("returns org and repo for valid git+http URLs", () => {
      expect(
        utils.extractOwnerAndRepo("git+http://github.com/org/repo.git"),
      ).toEqual(["org", "repo"]);
    });
  });

  describe("extractRepository", () => {
    it("returns undefined if no repository", () => {
      expect(utils.extractRepository({} as PackageManifest)).toBeUndefined();
    });

    it("returns undefined if repository is object with no URL", () => {
      expect(
        utils.extractRepository({
          repository: {},
        } as PackageManifest),
      ).toBeUndefined();
    });

    it("returns URL if repository is string", () => {
      expect(
        utils.extractRepository({
          repository: "foo",
        } as PackageManifest),
      ).toBe("foo");
    });

    it("returns URL if repository is object with URL", () => {
      expect(
        utils.extractRepository({
          repository: {
            url: "foo",
          },
        } as PackageManifest),
      ).toBe("foo");
    });
  });

  describe("abbreviateCommitHash", () => {
    it("returns the first 7 characters of a hash", () => {
      expect(
        utils.abbreviateCommitHash("09efd0553374ff7d3e62b79378e3184f5eb57571"),
      ).toBe("09efd05");
    });
  });

  describe("isPullRequest", () => {
    it("returns true if ref is non-nan number", () => {
      expect(utils.isPullRequest("808")).toBe(true);
    });

    it("returns false if ref is nan number", () => {
      expect(utils.isPullRequest("foo")).toBe(false);
    });
  });

  describe("isWhitelisted", () => {
    let fetchSpy: MockInstance;
    let whitelist: string;

    beforeEach(() => {
      whitelist = "";
      fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
        return Promise.resolve(new Response(whitelist, { status: 200 }));
      });
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it("should return true if repo is in whitelist", async () => {
      whitelist = `
        foo/bar
        org/repo
        baz/zab
      `;
      const result = await utils.isWhitelisted("org", "repo");
      expect(result).toBe(true);
    });

    it("should return false if repo is not in whitelist", async () => {
      const result = await utils.isWhitelisted("org", "repo");
      expect(result).toBe(false);
    });

    it("should return false if fetch fails", async () => {
      fetchSpy.mockRejectedValue(new Error("bleep bloop"));
      const result = await utils.isWhitelisted("org", "repo");
      expect(result).toBe(false);
    });
  });
});

  describe("extractOwnerAndRepo - additional edge cases", () => {
    it("handles URLs without .git extension", () => {
      expect(
        utils.extractOwnerAndRepo("https://github.com/org/repo")
      ).toBeNull();
    });

    it("handles URLs with extra path segments", () => {
      expect(
        utils.extractOwnerAndRepo("https://github.com/org/repo.git/extra")
      ).toBeNull();
    });

    it("handles empty string", () => {
      expect(utils.extractOwnerAndRepo("")).toBeNull();
    });

    it("handles malformed URLs", () => {
      expect(utils.extractOwnerAndRepo("not a url")).toBeNull();
    });

    it("handles URLs with username in path", () => {
      expect(
        utils.extractOwnerAndRepo("https://user@github.com/org/repo.git")
      ).toBeNull();
    });

    it("handles git:// protocol", () => {
      expect(
        utils.extractOwnerAndRepo("git://github.com/org/repo.git")
      ).toBeNull();
    });

    it("handles SSH URLs", () => {
      expect(
        utils.extractOwnerAndRepo("git@github.com:org/repo.git")
      ).toBeNull();
    });

    it("handles URLs with port numbers", () => {
      expect(
        utils.extractOwnerAndRepo("https://github.com:443/org/repo.git")
      ).toBeNull();
    });

    it("handles URLs with query parameters", () => {
      expect(
        utils.extractOwnerAndRepo("https://github.com/org/repo.git?foo=bar")
      ).toBeNull();
    });

    it("handles URLs with fragments", () => {
      expect(
        utils.extractOwnerAndRepo("https://github.com/org/repo.git#readme")
      ).toBeNull();
    });

    it("extracts from git+ssh:// URLs", () => {
      expect(
        utils.extractOwnerAndRepo("git+ssh://github.com/org/repo.git")
      ).toBeNull();
    });

    it("handles uppercase in protocol", () => {
      expect(
        utils.extractOwnerAndRepo("HTTPS://github.com/org/repo.git")
      ).toBeNull();
    });

    it("handles mixed case in domain", () => {
      expect(
        utils.extractOwnerAndRepo("https://GitHub.com/org/repo.git")
      ).toBeNull();
    });
  });

  describe("extractRepository - additional edge cases", () => {
    it("handles repository as null", () => {
      expect(
        utils.extractRepository({
          repository: null,
        } as any)
      ).toBeUndefined();
    });

    it("handles repository as number", () => {
      expect(
        utils.extractRepository({
          repository: 123,
        } as any)
      ).toBeUndefined();
    });

    it("handles repository as array", () => {
      expect(
        utils.extractRepository({
          repository: [],
        } as any)
      ).toBeUndefined();
    });

    it("handles repository object with type but no url", () => {
      expect(
        utils.extractRepository({
          repository: {
            type: "git",
          },
        } as any)
      ).toBeUndefined();
    });

    it("handles repository object with empty url", () => {
      expect(
        utils.extractRepository({
          repository: {
            url: "",
          },
        } as any)
      ).toBe("");
    });

    it("handles repository object with url and other properties", () => {
      expect(
        utils.extractRepository({
          repository: {
            type: "git",
            url: "https://github.com/org/repo.git",
            directory: "packages/pkg",
          },
        } as any)
      ).toBe("https://github.com/org/repo.git");
    });
  });

  describe("abbreviateCommitHash - additional edge cases", () => {
    it("handles hash shorter than 7 characters", () => {
      expect(utils.abbreviateCommitHash("abc")).toBe("abc");
    });

    it("handles exactly 7 character hash", () => {
      expect(utils.abbreviateCommitHash("abcdefg")).toBe("abcdefg");
    });

    it("handles empty string", () => {
      expect(utils.abbreviateCommitHash("")).toBe("");
    });

    it("handles very long hash", () => {
      const longHash = "a".repeat(100);
      expect(utils.abbreviateCommitHash(longHash)).toBe("aaaaaaa");
    });

    it("handles hash with numbers", () => {
      expect(utils.abbreviateCommitHash("1234567890")).toBe("1234567");
    });

    it("handles hash with mixed case", () => {
      expect(utils.abbreviateCommitHash("AbCdEfGhIjK")).toBe("AbCdEfG");
    });
  });

  describe("isPullRequest - additional edge cases", () => {
    it("returns true for string '0'", () => {
      expect(utils.isPullRequest("0")).toBe(true);
    });

    it("returns true for negative numbers", () => {
      expect(utils.isPullRequest("-1")).toBe(true);
    });

    it("returns true for decimal numbers", () => {
      expect(utils.isPullRequest("3.14")).toBe(true);
    });

    it("returns false for empty string", () => {
      expect(utils.isPullRequest("")).toBe(false);
    });

    it("returns false for whitespace", () => {
      expect(utils.isPullRequest(" ")).toBe(false);
    });

    it("returns false for branch names", () => {
      expect(utils.isPullRequest("feature/branch")).toBe(false);
    });

    it("returns false for refs with numbers and letters", () => {
      expect(utils.isPullRequest("abc123")).toBe(false);
    });

    it("returns true for large numbers", () => {
      expect(utils.isPullRequest("999999")).toBe(true);
    });

    it("returns false for Infinity", () => {
      expect(utils.isPullRequest("Infinity")).toBe(false);
    });

    it("returns false for NaN string", () => {
      expect(utils.isPullRequest("NaN")).toBe(false);
    });

    it("returns true for scientific notation", () => {
      expect(utils.isPullRequest("1e10")).toBe(true);
    });

    it("returns true for hex-looking numbers", () => {
      expect(utils.isPullRequest("0x123")).toBe(true);
    });
  });

  describe("isWhitelisted - additional edge cases", () => {
    it("should handle whitelist with Windows line endings", async () => {
      const whitelist = "foo/bar\r\norg/repo\r\nbaz/zab";
      fetchSpy.mockResolvedValue(new Response(whitelist, { status: 200 }));
      
      const result = await utils.isWhitelisted("org", "repo");
      expect(result).toBe(true);
    });

    it("should handle whitelist with mixed line endings", async () => {
      const whitelist = "foo/bar\norg/repo\r\nbaz/zab\r";
      fetchSpy.mockResolvedValue(new Response(whitelist, { status: 200 }));
      
      const result = await utils.isWhitelisted("baz", "zab");
      expect(result).toBe(true);
    });

    it("should handle whitelist with tabs", async () => {
      const whitelist = "\tfoo/bar\n\t\torg/repo";
      fetchSpy.mockResolvedValue(new Response(whitelist, { status: 200 }));
      
      const result = await utils.isWhitelisted("org", "repo");
      expect(result).toBe(true);
    });

    it("should be case sensitive", async () => {
      const whitelist = "org/repo";
      fetchSpy.mockResolvedValue(new Response(whitelist, { status: 200 }));
      
      const result = await utils.isWhitelisted("Org", "Repo");
      expect(result).toBe(false);
    });

    it("should handle partial matches correctly", async () => {
      const whitelist = "orgname/reponame";
      fetchSpy.mockResolvedValue(new Response(whitelist, { status: 200 }));
      
      const result = await utils.isWhitelisted("org", "repo");
      expect(result).toBe(false);
    });

    it("should handle network timeout", async () => {
      fetchSpy.mockRejectedValue(new Error("Network timeout"));
      
      const result = await utils.isWhitelisted("org", "repo");
      expect(result).toBe(false);
    });

    it("should handle 404 response", async () => {
      fetchSpy.mockResolvedValue(new Response("Not Found", { status: 404 }));
      
      const result = await utils.isWhitelisted("org", "repo");
      expect(result).toBe(false);
    });

    it("should handle empty whitelist", async () => {
      fetchSpy.mockResolvedValue(new Response("", { status: 200 }));
      
      const result = await utils.isWhitelisted("org", "repo");
      expect(result).toBe(false);
    });

    it("should handle whitelist with comments", async () => {
      const whitelist = "# comment\norg/repo\n# another comment";
      fetchSpy.mockResolvedValue(new Response(whitelist, { status: 200 }));
      
      const result = await utils.isWhitelisted("org", "repo");
      expect(result).toBe(true);
    });

    it("should handle very long whitelist", async () => {
      const entries = Array.from({ length: 10000 }, (_, i) => `org${i}/repo${i}`);
      entries.push("target/repo");
      const whitelist = entries.join("\n");
      fetchSpy.mockResolvedValue(new Response(whitelist, { status: 200 }));
      
      const result = await utils.isWhitelisted("target", "repo");
      expect(result).toBe(true);
    });
  });
});
