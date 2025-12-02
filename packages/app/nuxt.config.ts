export default defineNuxtConfig({
  sourcemap: true,

  compatibilityDate: "2024-07-30",
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "nitro-cloudflare-dev",
  ],

  css: ["~/assets/css/main.css"],

  eslint: {
    config: {
      standalone: false,
    },
  },

  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages",
    sourceMap: "inline",
    compatibilityDate: "2024-09-19",
    externals: {
      inline: [
        "@octokit",
        "@vue",
        "vue",
        "@tanstack",
        "@vueuse",
        "@iconify",
        "@nuxt",
        "nuxt",
        "query-registry",
        "@simulacrum",
        "@jsdevtools",
      ],
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
      scan: true,
      sizeLimitKb: 256,
    },
  },
});
