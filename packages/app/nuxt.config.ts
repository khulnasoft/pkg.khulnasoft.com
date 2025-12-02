export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@vueuse/nuxt", "nitro-cloudflare-dev"],

  css: ["~/app/assets/css/main.css"],

  eslint: {
    config: {
      standalone: false,
    },
  },

  devtools: { enabled: false }, // Changed from true to false to reduce memory usage during build.

  nitro: {
    preset: process.env.NITRO_PRESET || "cloudflare-pages",

    // sourceMap: "inline", // Commented out to reduce memory usage during build.

    compatibilityDate: "2024-09-19",

    externals: {
      inline: ["@octokit"],
    },
  },

  runtimeConfig: {
    nitro: { envPrefix: "NITRO_" },
    appId: "",
    webhookSecret: "",
    privateKey: "",
    rmStaleKey: "",
    ghBaseUrl: "https://api.github.com",
    test: "",
  },

  // ❗️ NO HOOKS OVERRIDING THE RENDERER (Cloudflare forbids this)

  icon: {
    clientBundle: {
      icons: ["mdi:github"],
      collections: ["mdi"],
      scan: false, // Changed from true to false to reduce memory usage during build.
      sizeLimitKb: 256,
    },
  },
});
