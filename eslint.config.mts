import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, "@typescript-eslint": tseslint.plugin, react: pluginReact,  prettier: eslintPluginPrettier, },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginReact.configs.flat.recommended,
       eslintConfigPrettier,
    ],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
    },
    rules: {
      "no-console": "error",
      "no-empty-function": "error",
      "@typescript-eslint/no-empty-function": "error",
      "prettier/prettier":"error"
    },
  },
]);
