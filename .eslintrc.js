module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["airbnb"],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    quotes: ["error", "double"],
    "linebreak-style": "off",
    // add more custom rules here
  },
  settings: {
    react: {
      version: "detect", // automatically picks the version you have installed.
    },
  },
};
