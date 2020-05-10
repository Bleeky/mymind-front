module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module'
    },
    env: {
      browser: true,
    },
    extends: ["airbnb-base"],
    plugins: [
      'svelte3',
    ],
    overrides: [
      {
        files: ['**/*.svelte'],
        processor: 'svelte3/svelte3',
        "rules": {
          "no-multiple-empty-lines": "off",
          "import/first": "off",
          "import/no-unresolved": "off",
          "import/no-mutable-exports": "off",
          "import/no-duplicates": "off"
        }
      }
    ],
    rules: {
      "no-plusplus": 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  }
  