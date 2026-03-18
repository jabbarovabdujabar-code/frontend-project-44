export default [
  {
    // Ignore dependencies and build artifacts.
    ignores: ['node_modules/**'],
  },
  {
    // Apply to all JS modules in the repo.
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    rules: {
      // Stylistic rules (based on https://eslint.style/rules)
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'unix'],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'comma-spacing': ['error', { before: false, after: true }],
      'func-call-spacing': ['error', 'never'],
      'semi-style': ['error', 'last'],
    },
  },
];
