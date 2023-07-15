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
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        controlComponents: ["input"],
        depth: 3,
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
    // add more custom rules here
  },
  settings: {
    react: {
      version: "detect", // detect React version
    },
  },
};
