module.exports = {
    root: true,
    env: {
        es2020: true,
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],
    rules: {
        'comma-dangle': 'off',
    },
    parserOptions: {
        sourceType: 'module',
    },
};
