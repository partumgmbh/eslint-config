# @partumgmbh/eslint-config

This is the base configuration for ESLint based on [JavaScript Standard Style](https://standardjs.com/). It contains all styling related
settings, which should stay the same everywhere. They are controlled via [prettier](http://npm.im/prettier)
and offer auto-fixing. Additional static analysis may be added on a per project
basis, e.g. for react, react-native etc.

```bash
npm install -D eslint @partumgmbh/eslint-config

echo '{"extends": "@partumgmbh"}' > .eslintrc.json

npx eslint .
```
