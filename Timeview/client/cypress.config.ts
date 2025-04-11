
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
         specPattern: "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}",

      baseUrl: 'http://localhost:5173',
    supportFile: false//"cypress/support/e2e.ts"
  }
});