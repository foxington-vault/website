// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      link: [
        { rel: "icon", href: "./favicon.ico" },
        {
          rel: "preload",
          href: "fonts/LuckysTale-Body.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "fonts/LuckysTale-Bold-New.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
        },
      ],
      script: [
        {
          src: "https://umami.kurofusky.xyz/umami.js",
          async: true,
          defer: true,
          "data-website-id": "d1e1b841-cee6-4cd2-a777-477700d4f5a2",
        },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  plugins: [{ src: "~/plugins/vercel.js", mode: "client" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
