import { defineConfig } from 'cypress'
import fs from 'fs'
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      on('task', {
        readFileMaybe(filename) {
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename, 'utf8');
          }

          return null;
        },
      });
          
    },
  }
})