module.exports = {
  plugins: ['filenames', 'jest', 'jasmine'],
  extends: [
    '@partumgmbh',
    'standard',
    'standard-jsx',
    'standard-react',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jasmine/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    __DEV__: true,
  },
  rules: {
    'filenames/match-exported': 'error',
    'react/prefer-stateless-function': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/jsx-closing-bracket-location': [
      1,
      {selfClosing: 'line-aligned', nonEmpty: 'after-props'},
    ],
  },
  parser: 'babel-eslint',
  settings: {
    jest: {
      version: 26,
    },
  },
}
