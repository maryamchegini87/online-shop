import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use FlatCompat to adapt legacy "extends" configs to flat config
const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  // Adapt Next.js configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Adapt eslint-config-prettier
  ...compat.extends("prettier"),

  // Custom rules + Prettier plugin
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "no-console": "error",
      "no-empty-function": "error",
      "prettier/prettier": "error",
    },
  },
];

export default eslintConfig;
