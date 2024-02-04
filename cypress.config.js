import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://192.168.56.1:3000/",
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },
});
