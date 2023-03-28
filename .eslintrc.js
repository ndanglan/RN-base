module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'react-native'],
  ignorePatterns: ['src/graphql/generated.tsx'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-shadow': 'off',
    'react-native/no-raw-text': 'off', // Had to disable this due to bug crashing eslint https://github.com/Intellicode/eslint-plugin-react-native/issues/270. SHouldn't be an issue as React Native would throw an error during development or testing anyway
    '@typescript-eslint/no-shadow': 'off',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-single-element-style-arrays': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'prettier/prettier': 0,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
};
