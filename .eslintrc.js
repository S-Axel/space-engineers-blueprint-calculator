module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
