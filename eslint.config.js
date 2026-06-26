const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
      "react/jsx-key": "off",
      "react/jsx-no-target-blank": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
      indent: ["error", 2],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
    },
  },
];
