import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    e2e: {
        baseUrl: "https://telnyx.com",
        specPattern: "cypress/e2e/**/*.feature",
        viewportWidth: 1440,
        viewportHeight: 900,
        defaultCommandTimeout: 10000,
        // The live site and the portal sometimes load slowly
        retries: {
            runMode: 2,
            openMode: 0,
        },
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                }),
            );
            return config;
        },
    },
});
