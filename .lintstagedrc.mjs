export default {
  // Type check and Lint TypeScript files
  '**/*.ts': (filenames) => [
    'npx tsc --noEmit',
    `eslint --max-warnings=0 --fix ${filenames.join(' ')}`,
  ],

  // Lint JS files
  '**/*.*js': (filenames) => `eslint --fix ${filenames.join(' ')}`,

  // Prettify TS, JS, Markdown and JSON files
  '**/*.(ts|*js|json|md)': (filenames) =>
    `prettier --write ${filenames.join(' ')}`,
};
