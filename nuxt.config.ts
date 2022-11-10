// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
