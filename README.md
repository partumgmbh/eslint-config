# eslint-config

> ESLint configurations used throughout projects

- [@partumgmbh/eslint-config](/eslint-config) Base Configuration
- [@partumgmbh/eslint-config-react](/eslint-config-react) React Configuration

## Automatically applying styles

### Git

Using [husky](npm.im/husky) and [lint-staged](npm.im/lint-staged) fixes can automatically be applied before committing.

```
npm i -D husky lint-staged
```

```json
// package.json
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  }
}
```

### Editors

#### VSCode

Use the [ESLint VSCode plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and make sure to set `eslint.autoFixOnSave` to true.

#### Atom

Use the [ESLint Atom plugin](https://atom.io/packages/linter-eslint) and make sure to enable `Fix errors on save`.
