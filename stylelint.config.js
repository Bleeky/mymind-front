module.exports = {
  ignoreFiles: ['node_modules', './**/*.js', '.*.js'],
  extends: 'stylelint-config-recommended',
  processors: [['@mapbox/stylelint-processor-arbitrary-tags', { fileFilterRegex: [/\.vue$/] }]],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/properties-alphabetical-order': true,
    'order/order': [
      'dollar-variables',
      {
        type: 'at-rule',
        name: 'extend',
      },
      'custom-properties',
      'declarations',
      'at-rules',
    ],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['mixin', 'include', 'if', 'else', 'extend', 'function', 'return', 'for'],
    }],
    'no-empty-source': null,
    'no-empty-first-line': null,
  },
};
