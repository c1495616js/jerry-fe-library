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
