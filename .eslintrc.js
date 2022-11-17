module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
    "next",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "import/extensions": 0,
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "react/jsx-no-bind": 0,
    "arrow-body-style": 0,
    "react/require-default-props": 0,
    "import/no-extraneous-dependencies": 0,
  },
};
