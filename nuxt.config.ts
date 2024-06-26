// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: {
    enabled: true,

    timeline: {
      enabled: false,
    },
  },
  image: {
    /* ... */
  },

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    [
      "@nuxtjs/i18n",
      {
        defaultLocale: "en",
        // defaultDirection: "rtl",
        langDir: "./locales/",
        locales: [
          {
            file: "en.js",
            code: "en",
            iso: "en-CA",
            name: "English",
            dir: "ltr",
          },
          {
            file: "ar.js",
            code: "ar",
            iso: "ar-EG",
            name: "Arabic",
            dir: "rtl",
          },
        ],
      },
    ],
    "@sidebase/nuxt-auth",
  ],
  auth: {
    baseURL: process.env.BASE_URL,
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/authentication/form/login", method: "post" },
        signOut: false,
        signUp: { path: "/authentication/form/register", method: "post" },
        getSession: { path: "/authentication/me", method: "get" },
        // refresh: { path: '/refresh', method: 'post' },
      },
      token: {
        signInResponseTokenPointer: "/access_token",
        maxAgeInSeconds: 34560000, // 400 days, the maximum allowed by the browser
      },
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://api.example.com/",
      envMode: process.env.envMode || "dev",
    },
  },
  css: ["assets/css/main.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  routeRules: {
    "/business-analysis": { ssr: false },
    "/ar/business-analysis": { ssr: false },
  },
});
