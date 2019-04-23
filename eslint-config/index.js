module.exports = {
  plugins: ['prettier'],
  extends: ['standard', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: false,
        jsxBracketSameLine: true,
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    'import/no-cycle': ['error', {maxDepth: 2}],
    'promise/prefer-await-to-then': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'prefer-const': 'error',
  },
}
