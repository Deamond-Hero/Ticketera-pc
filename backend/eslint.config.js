import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      semi: [2, "always"],
      quotes: [2, "double", { avoidEscape: true }],
      "comma-dangle": [2, "always-multiline"],
    },
  },
  pluginJs.configs.recommended,
];
