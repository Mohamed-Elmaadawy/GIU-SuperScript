import globals from 'globals';

export default [
  // Must come first: a flat-config object with only `ignores` is global.
  // src/ is a BUILD INPUT, not shippable JS — bundle.template.js carries
  // placeholder markers (e.g. `/*__CORE_WARN__*/,`) that are illegal syntax
  // until build.js substitutes them, so linting it always errors.
  // scripts/dev/** and scripts/screenshots/** are local-only scraper/screenshot
  // tooling, never tracked (see .gitignore) and out of scope for this lint gate.
  { ignores: ['src/**', 'node_modules/**', 'test-results/**', 'scripts/dev/**', 'scripts/screenshots/**'] },
  {
    // scripts/**/*.js, not 'scripts/GIU *.js': the hand-maintained standalones
    // under scripts/individual/ and the build tooling under scripts/build/ were
    // silently unlinted before.
    files: ['scripts/**/*.js'],
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
      // caughtErrors: 'none' — an unused catch binding (`catch (err) {}`) is an
      // established idiom across these scripts; ESLint 9+ flags it by default.
      'no-unused-vars': ['error', { vars: 'all', args: 'none', caughtErrors: 'none', ignoreRestSiblings: true }],
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'no-console': 'off',
    },
  },
  {
    // Build tooling is Node CommonJS, not a browser userscript.
    files: ['scripts/build/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
    rules: {
      'no-unused-vars': ['error', { vars: 'all', args: 'none', caughtErrors: 'none', ignoreRestSiblings: true }],
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'no-console': 'off',
    },
  },
];
