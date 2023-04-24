module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['unused-imports'],
  rules: {
    'react/display-name': 'off',
    '@next/next/no-img-element': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'import/newline-after-import': 'error',
    'no-restricted-imports': ['warn', { patterns: ['../**'] }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
  },
  ignorePatterns: ['node_modules', '.turbo', '.next', 'public'],
};
