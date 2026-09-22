import globals from 'globals';

export default [
  {
    files: ['scripts/GIU *.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        ...globals.browser,
        GM_getValue: 'readonly',
        GM_setValue: 'readonly',
        GM_addStyle: 'readonly',
        GM_xmlhttpRequest: 'readonly',
        GM_notification: 'readonly',
        GM_setClipboard: 'readonly',
        GM_getResourceText: 'readonly',
        GM_info: 'readonly',
        unsafeWindow: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'no-console': 'off',
    },
  },
];
