module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    globals: {
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        it: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
    },
    rules: {
        eqeqeq: ['error', 'always'],
        'no-console': 'off',
        'max-len': ['error', { code: 120, ignoreUrls: true }],
        'no-shadow': 'off',
        'prefer-destructuring': 'off',
        'dot-notation': 'off',
        'sort-imports': 'off',
        'import/extensions': 'off',
        'func-names': 'off',
        'no-restricted-syntax': 'off',
        'no-useless-constructor': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'global-require': 'off',
        'consistent-return': 'off',
        'no-plusplus': 'off',
        'no-underscore-dangle': 'off',
        'no-empty-function': ['error', { allow: ['constructors'] }],
        'no-nested-ternary': 'off',
        'max-classes-per-file': 'off',
        'no-param-reassign': 'error',
        'default-case': 'off',
        'symbol-description': 'off',
        'no-empty': 'off',
        'no-void': 'off',
        'class-methods-use-this': 'off',
        'prefer-promise-reject-errors': 'error',
        'no-case-declarations': 'error',
        'react/button-has-type': 'off',
        'no-use-before-define': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.{ts,tsx}',
                    '**/*.integration.ts',
                    '**/*.stories.{ts,tsx}',
                    '**/test-utils/*.ts',
                    '**/testUtils/*.ts',
                    '**/mock-data/*.ts',
                    '**/*.mock.ts',
                    '**/test.server.ts'
                ]
            }
        ],
        '@typescript-eslint/import-name': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true
            }
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true
            }
        ]
    }
}
