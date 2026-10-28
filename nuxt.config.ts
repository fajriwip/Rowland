import mkcert from "vite-plugin-mkcert";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-13",
  devtools: { enabled: false },
  modules: ["@storyblok/nuxt", "@nuxt/icon", "motion-v/nuxt"],

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

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,100..900&family=Instrument+Sans:wght@400..700&display=swap",
        },
      ],
    },
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
