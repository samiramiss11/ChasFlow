import { devServer } from '@cypress/vite-dev-server'
import { defineConfig } from 'cypress'
import * as path from 'path'

export default defineConfig({
  projectId: 'nqoyvw',
  viewportWidth: 1480,
  viewportHeight: 1260,
  video: false,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  pageLoadTimeout: 60000,
  requestTimeout: 45000,
  responseTimeout: 45000,
  experimentalStudio: true,
  e2e: {
     specPattern: "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}",
    baseUrl: 'http://localhost:5173/',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents (on, config) {
      on('dev-server:start', (options) => {
        return devServer({
          ...options,
          viteConfig: {
            configFile: path.resolve(__dirname, 'vite.config.ts'),
          },
        })
      })

      return config
    },
  
  }
  ,
  
})