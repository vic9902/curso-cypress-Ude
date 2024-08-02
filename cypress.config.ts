import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';

export default defineConfig({
  //retries: 1, // si la prueba falla intenta nuevamente (util para realizar revisiones)
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