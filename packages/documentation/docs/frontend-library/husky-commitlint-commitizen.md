---
sidebar_position: 4
---

# Setup Husky + Commitlint + Commitizen + Lintstaged

## Idea

- We use `husky` to add git hook.

  - `pre-commit`: before commit, we can run any action here like `lint` and `test`.
  - `commit-msg`: we add `commitlint` here to lint the commit message.

- We use `commmitzen` to have a cli to easily write the legit commit message, so that it can pass `commitlint`.

- Then we just need to type `git add -A` and `npm run commit` in the future.

## Husky

https://typicode.github.io/husky

## Installation Steps

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

https://commitlint.js.org/

- `npm install --save-dev @commitlint/{cli,config-conventional}`

- `echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js`

### Refs

- https://www.freecodecamp.org/news/how-to-use-commitlint-to-write-good-commit-messages/

## Commitizen

http://commitizen.github.io/cz-cli/

- `npm install --save-dev commitizen`

- `npx commitizen init cz-conventional-changelog --save-dev --save-exact`

```js
...
  "scripts": {
    "commit": "cz"
  }
```

Then,

```bash
npm run commit
```

## lint-staged

- install `lint-staged` in root folder.
- add `.lintstagedrc` in root folder

```json
{
  "**/*.{js,jsx,ts,tsx}": ["npx prettier --write", "npx eslint --fix"]
}
```

- add npm-script in each package

For the `--no-stash`, refering [this](https://github.com/okonet/lint-staged/issues/795)

```json
"scripts":{
  ...
  "lint-staged": "lint-staged --no-stash"
}
```

- in file `.husky/pre-commit`, add this

```bash
npm run lint-staged
```
