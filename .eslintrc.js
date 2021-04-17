module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "comma-dangle": "off",
    quotes: "off",
    "spaced-comment": "off",
    "no-else-return": "off",
    "no-use-before-define": "off",
  },
};
