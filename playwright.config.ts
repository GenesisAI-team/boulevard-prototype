import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: "http://localhost:4321",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "desktop-smoke",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-smoke",
      use: { ...devices["Pixel 7"] },
    },
  ],
  webServer: {
    command: "npm run build && npm run preview -- --port 4321",
    port: 4321,
    reuseExistingServer: !process.env.CI,
  },
});
