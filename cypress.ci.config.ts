import { defineConfig } from "cypress";
import baseConfig from "./cypress.config";

// Config for the GitHub Actions pipeline: the shared runner is slower than a
// local machine, so the timeouts are longer. Videos are not needed there.
export default defineConfig({
  ...baseConfig,
  video: false,
  e2e: {
    ...baseConfig.e2e,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 90000,
  },
});
