// eslint.config.js
// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react"; // ✅ correct import name

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    ignores: ["dist/**", "node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }, // 👈 enables JSX parsing
      },
    },
    plugins: {
      react:reactPlugin, // 👈 adds React linting support
    },
    rules: {
      semi: ["error", "always"],
      "prefer-const": "error",
      "react/jsx-uses-react": "off", 
      "react/react-in-jsx-scope": "off", 
    },
   
  }
];
