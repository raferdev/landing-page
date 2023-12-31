import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = await Promise.resolve(fileURLToPath(import.meta.url))
const __dirname = await Promise.resolve(path.dirname(__filename))

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const __eslintCofig = [
  ...compat.config({
    parser: '@typescript-eslint/parser',
    extends: [
      'prettier',
      'plugin:mdx/recommended',
      'plugin:prettier/recommended',
      'plugin:storybook/recommended',
      'plugin:tailwindcss/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@next/next/recommended',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'testing-library/prefer-screen-queries': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@next/next/no-html-link-for-pages': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/no-contradicting-classname': 'error',
    },
    settings: {
      'mdx/code-blocks': true,
      'mdx/language-mapper': {},
      next: {
        rootDir: '.',
      },
      tailwindcss: {
        callees: ['cn', 'cva'],
        config: 'tailwind.config.ts',
      },
    },
    overrides: [
      {
        files: ['*.mdx'],
        extends: ['plugin:mdx/recommended', 'plugin:@next/next/recommended'],
        rules: {
          '@typescript-eslint/no-unused-vars': 'off',
        },
      },
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
      },
    ],
  }),
]

export default __eslintCofig
