import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import pluginJestExtended from "eslint-plugin-jest-extended";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    files: ["**/*.spec.js", "**/*.test.js"],
    plugins: {
      jest: pluginJest,
      jestExtended: pluginJestExtended,
    },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "jest/padding-around-all": "error",
    },
  },
  pluginJest.configs["flat/recommended"],
  pluginJest.configs["flat/style"],
  pluginJestExtended.configs["flat/all"],
  eslintConfigPrettier,
];
