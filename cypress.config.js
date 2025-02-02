const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const nodePolyfills = require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const {createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  execTimeout: 20000,
  requestTimeout: 10000,
  defalutTimeout: 20000,
  pageLoadTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: 0,
  video: false,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  e2e: {
    async setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(launchOptions.args)
        if (browser.name == 'chrome') {
          launchOptions.args.push('--disable-gpu')
        }
        return launchOptions
      });

      const bundler = createBundler({
        plugins: [nodePolyfills(), createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.{feature,js}",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "http://localhost:3000"
  },
});
