const js = require('@eslint/js');
const globals = require('globals');
const tseslint = require('typescript-eslint');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const prettierPlugin = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');
const reactRefreshPlugin = reactRefresh.default || reactRefresh;

const isProd = process.env.NODE_ENV === 'production';

module.exports = tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/*.test.js',
      '**/spec/**',
      '**/__test__/**',
    ],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefreshPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-hooks/set-state-in-effect': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/default-param-last': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { variables: false, functions: false },
      ],
      'no-console': isProd ? 'warn' : 'off',
      'no-debugger': isProd ? 'warn' : 'off',
      'no-param-reassign': ['error', { props: false }],
      'prefer-const': 'warn',
      'no-plusplus': 'off',
      'vars-on-top': 'off',
      'no-underscore-dangle': 'off',
      'comma-dangle': 'off',
      'func-names': 'off',
      'prefer-arrow-callback': 'off',
      'prefer-template': 'off',
      'no-nested-ternary': 'off',
      'max-classes-per-file': 'off',
      'arrow-parens': ['error', 'as-needed'],
      'no-restricted-syntax': 'off',
      'consistent-return': 'warn',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ...eslintConfigPrettier,
  },
);
