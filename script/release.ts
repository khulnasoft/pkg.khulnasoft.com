import { release } from "@vitejs/release-scripts";

release({
  repo: "pkg.khulnasoft.com",
  packages: ["cli"],
  toTag: (_, version) => `v${version}`,
  logChangelog: () => {},
  generateChangelog: async () => {},
});
