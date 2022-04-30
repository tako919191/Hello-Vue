module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'comma-dangle': 'off',
  },
};
