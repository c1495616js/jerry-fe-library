module.exports = {
  extends: [
    // 套用針對 react 想要使用的設定
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // new JSX transform
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
