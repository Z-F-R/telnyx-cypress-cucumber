import { defineConfig } from "cypress";
import baseConfig from "./cypress.config";

// Config for the GitHub Actions pipeline. The shared runner is slower than a
// local machine and the live site sometimes loads slowly, so the timeouts are
// longer and failed tests are retried. Retries are kept out of the base config,
// so local runs show flaky tests instead of hiding them.
export default defineConfig({
    ...baseConfig,
    e2e: {
        ...baseConfig.e2e,
        defaultCommandTimeout: 15000,
        pageLoadTimeout: 90000,
        retries: {
            runMode: 2,
            openMode: 0,
        },
    },
});
