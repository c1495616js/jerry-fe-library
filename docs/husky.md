# Setup Husky

https://typicode.github.io/husky

## steps

- `npx husky-init && npm install`

- `npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`

- `is-ci`

```bash
npm install is-ci --save-dev
```

```js
// package.json
{
  "scripts": {
    "prepare": "is-ci || husky install"
  }
}
```

## Commitlint

- `npm install --save-dev @commitlint/{cli,config-conventional}`

- `echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js`

### Refs

- https://www.freecodecamp.org/news/how-to-use-commitlint-to-write-good-commit-messages/

## Commitizen

- `npm install --save-dev commitizen`

- `npx commitizen init cz-conventional-changelog --save-dev --save-exact`
