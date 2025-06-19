// .eslintrc.cjs
module.exports = {
    root: true,
    ignorePatterns: ['dist/', 'node_modules/', 'projects/', '.angular/'],
    overrides: [
      {
        files: ['*.ts'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: ['tsconfig.json'],
          createDefaultProgram: true,
        },
        plugins: ['@typescript-eslint', '@angular-eslint', 'prettier'],
        extends: [
          'plugin:@angular-eslint/recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:@angular-eslint/template/process-inline-templates',
          'plugin:prettier/recommended',
        ],
        rules: {
          '@angular-eslint/directive-selector': [
            'error',
            { type: 'attribute', prefix: 'app', style: 'camelCase' },
          ],
          '@angular-eslint/component-selector': [
            'error',
            { type: 'element', prefix: 'app', style: 'kebab-case' },
          ],
          '@typescript-eslint/no-explicit-any': 'error',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          'prettier/prettier': ['error', { endOfLine: 'lf' }],
          '@typescript-eslint/no-unused-vars': ['error', { 
          vars: 'all', 
          args: 'after-used', 
          ignoreRestSiblings: true 
  }],
  'prettier/prettier': 'off',
        },
      },
      {
        files: ['*.html'],
        plugins: ['@angular-eslint/template', 'prettier'],
        extends: [
          'plugin:@angular-eslint/template/recommended',
          'plugin:@angular-eslint/template/accessibility',
        ],
        rules: {
          'prettier/prettier': ['error', { endOfLine: 'lf' }],
        },
      },
    ],
  };
  