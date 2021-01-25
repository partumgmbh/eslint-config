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
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'import/no-cycle': ['error', {maxDepth: 2}],
    'promise/prefer-await-to-then': 'error',
    'prefer-const': 'error',
  },
}
