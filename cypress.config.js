const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const nodePolyfills = require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const {createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  execTimeout: 10000,
  requestTimeout: 5000,
  defalutTimeout: 5000,
  pageLoadTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: 0,
  video: false,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [nodePolyfills(), createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "http://localhost:3000"
  },
});
