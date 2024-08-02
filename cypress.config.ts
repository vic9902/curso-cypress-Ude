import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';

export default defineConfig({
  e2e:{
    setupNodeEvents(on, config){
      configureAllureAdapterPlugins(on, config);
      return config;
      // implement node event listeners here
    }
  },
  viewportWidth: 1366,
  viewportHeight: 768
});