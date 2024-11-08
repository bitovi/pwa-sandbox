module.exports = {
  root: true,
  plugins: ["import"],
  extends: ["eslint:recommended", "plugin:import/recommended"],

  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },

  rules: {
    "no-use-before-define": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-warning-comments": ["warn", { terms: ["todo"], location: "start" }],

    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-useless-path-segments": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
  },
}
