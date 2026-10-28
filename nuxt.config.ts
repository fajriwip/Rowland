import mkcert from "vite-plugin-mkcert";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-13",
  devtools: { enabled: false },
  modules: ["@storyblok/nuxt", "@nuxt/icon", "@nuxt/fonts", "motion-v/nuxt"],

  css: ["~/assets/css/tailwind.css"],

  storyblok: {
    accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
    componentsDir: "~/storyblok",
    apiOptions: {
      /** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
      region: process.env.STORYBLOK_REGION || "eu",
      /** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
      endpoint: process.env.STORYBLOK_API_BASE_URL
        ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
        : undefined,
    },
  },

  // fonts are self-hosted at build time by @nuxt/fonts from the font-family names in tailwind.css
  fonts: {
    families: [
      { name: "Fraunces", provider: "google", weights: ["100 900"] },
      { name: "Instrument Sans", provider: "google", weights: ["400 700"] },
    ],
  },

  ssr: true,

  // hash links (nav, back-to-top, direct URL with #anchor) glide instead of jumping
  router: { options: { scrollBehaviorType: "smooth" } },

  devServer: {
    https: true
  },

  vite: {
    plugins: [mkcert(), tailwindcss()],
  },
});
