const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://www.bigcommerce.com/articles/ecommerce/',
    watchForFileChanges: false,
    chromeWebSecurity: false,
    mochaFile: 'cypress/results/testResutls.json',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    reporter : "mochawesome",
    reporterOptions: {
      mochaFile : 'results/myTestResults.html',
      toConsole : true
    },
    retries: 1



  },
});
