module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'quotes': ['error', 'single', { avoidEscape: true }],
        'no-trailing-spaces': ['error'],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
        'eol-last': ['error', 'always'],
        'semi': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' }
        ],
        'indent': ['error', 4],
        'lines-between-class-members': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/member-delimiter-style': ['error', {
            'multiline': {
                'delimiter': 'none',
                'requireLast': false
            },
            'singleline': {
                'delimiter': 'comma',
                'requireLast': false
            }
        }]
    }
};
