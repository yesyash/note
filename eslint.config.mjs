import tseslint from 'typescript-eslint'
import importX from 'eslint-plugin-import-x'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
  // Type-aware recommended rules from typescript-eslint v8
  ...tseslint.configs.recommendedTypeChecked,
  // Global ignores (also ignore the config file itself for TS type-aware rules)
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'src/routeTree.gen.ts', // generated file
      'eslint.config.mjs',
    ],
  },
  // Project rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json', // enable full type-aware linting
        tsconfigRootDir: new URL('.', import.meta.url),
      },
    },
    plugins: {
      'import-x': importX,
    },
    settings: {
      // Resolve TS path aliases & node resolution so ordering & unused detection work
      'import-x/resolver': {
        typescript: { project: ['./tsconfig.json'] },
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
    },
    rules: {
      'import-x/order': 'error',
      // TypeScript-specific hygiene
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
    },
  },
  // Disable stylistic rules conflicting with Prettier
  prettier,
)
