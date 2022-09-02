module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'semi': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/semi': [2, "never"],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/comma-dangle': [2, "never"],
    '@typescript-eslint/no-unused-vars': [1, { "argsIgnorePattern": "^_" }]
  }
}