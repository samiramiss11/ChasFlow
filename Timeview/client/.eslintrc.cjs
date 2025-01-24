module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".js"] }], // Allow JSX in .js files
    "no-console": "warn", // Warn about console statements
    "prettier/prettier": "error",
    "singleQuote": true,
    "trailingComma": "none",
    "endOfLine": "auto" // Prettier formatting errors
  },
  plugins: ["react", "prettier", "react-hooks", "jsx-a11y"], // Ensure Prettier runs as part of linting
};
