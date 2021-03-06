module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsConfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  ignorePatterns: [".eslintrc.js"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^_",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "warn",
  },
};
