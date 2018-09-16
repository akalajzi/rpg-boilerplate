const path = require('path');
const baseRules = require('eslint-config-airbnb-base/rules/style');
const [_, ...restricted] = baseRules.rules['no-restricted-syntax'];

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'plugin:flowtype/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    jsx: true,
  },
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
  },
  plugins: ['babel', 'compat', 'flowtype', 'import', 'jest', 'jsx-a11y', 'prettier'],
  rules: {
    // General
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': ['error', { consistent: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'linebreak-style': 0,
    'global-require': 0,
    'no-restricted-syntax': [
      2,
      ...restricted.filter(r => !['ForOfStatement'].includes(r.selector)),
    ],
    camelcase: 0,
    // React
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/no-multi-comp': 0,
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],

    'import/no-unresolved': [2, { commonjs: true }],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'stories/**',
          '**/__mocks__/*.js',
          '**/__tests__/*.spec.js',
          '**/__tests__/*.test.js',
        ],
      },
    ],
    'compat/compat': 2,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['a'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
