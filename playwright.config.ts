import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.WEB_SERVER_URL || 'http://localhost:3000',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Galaxy S9+'] },
    },
  ],

  webServer: {
    command: 'npm run test',
    url: process.env.WEB_SERVER_URL || 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 20 * 60 * 1000,
  },
})
