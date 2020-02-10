module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb'
    ],
    globals: {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        'import/extensions': 'off',
        'indent': ['error', 4],
        'semi': ['error', 'never'],
        'import/no-unresolved': 'off',
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        'no-case-declarations': 'off'
    }
}