module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['simple-import-sort', 'import', 'tailwindcss'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: false,
      },
    ],
  },
  // override the default
  settings: {
    react: {
      version: 'detect',
    },
  },
};
