module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "camelcase": "off",
    "react/jsx-wrap-multilines": "off",
    "class-methods-use-this": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      { "js": "never" }
    ],
    "no-underscore-dangle": "off",
    "import/no-duplicates": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "_" }],
    "no-param-reassign": "off",
    "prettier/prettier": "error",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [
      1, { "extensions": [".js"] }
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
  },
  settings: {
    "react": {
      "version": "detect"
    }
  }
}
