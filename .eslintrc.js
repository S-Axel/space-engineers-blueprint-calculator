module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'plugin:react/jsx-runtime',
    'airbnb-typescript',
    'plugin:@typescript-eslint/strict',
  ''
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/forbid-prop-types': 'off',
    'react/require-default-props':['error', {
      functions:'defaultArguments',
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'semi', requireLast: true },
      singleline: { delimiter: 'semi', requireLast: false },
      multilineDetection: 'brackets',
    }],
  },
};
