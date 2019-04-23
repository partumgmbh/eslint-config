module.exports = {
  plugins: ['filenames', 'jest', 'jasmine'],
  extends: [
    '@partumgmbh',
    'standard-react',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jasmine/recommended',
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
  },
  parser: 'babel-eslint',
}
