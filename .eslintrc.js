module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['jest'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-prototype-builtins': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'function-declaration' },
    ],
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
};
