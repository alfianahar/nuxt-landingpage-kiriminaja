// // https://v3.nuxtjs.org/api/configuration/nuxt.config
// export default defineNuxtConfig({
//   modules: [
//     "@nuxtjs/tailwindcss",
//     "@pinia/nuxt",
//     {
//       autoImports: [
//         // automatically imports `defineStore`
//         "defineStore", // import { defineStore } from 'pinia'
//         // automatically imports `defineStore` as `definePiniaStore`
//         ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
//       ],
//     },
//   ],
//   imports: {
//     dirs: ["stores"],
//   },
//   tailwindcss: {
//     cssPath: "~/assets/css/main.css",
//   },
//   css: ["@fortawesome/fontawesome-svg-core/styles.css"],
// });

// import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  imports: {
    dirs: ["stores"],
  },
  modules: [
    ["@nuxtjs/tailwindcss"],
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
