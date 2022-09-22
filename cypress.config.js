const { defineConfig } = require("cypress");
const cypressTestResults = require("cypress-test-results")

module.exports = defineConfig({
  e2e: {

    "trashAssetsBeforeRuns": true,
    "video": false,


    setupNodeEvents(on, config) {
      // implement node event listeners here

      cypressTestResults(on, config)
    },
  },
});
