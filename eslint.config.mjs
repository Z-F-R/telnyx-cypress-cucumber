import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginCypress from "eslint-plugin-cypress";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
    { ignores: ["node_modules/", "reports/"] },
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ["cypress/**/*.ts"],
        extends: [pluginCypress.configs.recommended],
    },
    // Turns off style rules that Prettier takes care of
    prettierConfig,
]);
