module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["airbnb", "react-app", "plugin:react/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },

  plugins: ["react", "@typescript-eslint", "jsx-a11y"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] }
    ],
    indent: ["error", 2, { ignoredNodes: ["JSXElement"] }],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "@typescript-eslint/no-unused-vars": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
