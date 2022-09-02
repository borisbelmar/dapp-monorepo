module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks'
  ],
  plugins: ['react'],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'react/jsx-key': 'off',
    'linebreak-style': 'off',
    'semi': [2, "never"],
    'comma-dangle': [2, "never"],
    'import/no-extraneous-dependencies': 0,
    'no-console': 1,
    'object-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'arrow-body-style': 0,
    'consistent-return': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/button-has-type': 0,
    'arrow-parens': [2, "as-needed"],
    'class-methods-use-this': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/require-default-props': 0,
    'no-underscore-dangle': [2, { "allow": ['_id'], "allowAfterThis": true }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-cycle': 'off',
    'react/forbid-prop-types': 'off'
  }
};
