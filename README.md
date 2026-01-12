# TypeScript Library Template

A modern, battery-included template for creating JavaScript/TypeScript libraries. This project is configured with best practices for development, testing, linting, and building.

## Features

- **Language**: TypeScript (~5.8.3)
- **Module Bundler**: [tsup](https://tsup.egoist.dev/) (Builds ESM, CJS, and IIFE formats)
- **Testing**: [Vitest](https://vitest.dev/)
- **Linter**: [Oxlint](https://oxc-project.github.io/docs/guide/usage/linter.html) (Extremely fast linter)
- **Formatter**: [Prettier](https://prettier.io/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)
- **Commit Convention**: [Commitlint](https://commitlint.js.org/) (Enforces Conventional Commits)
- **Changelog**: Automated with `conventional-changelog`

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Initialize Git hooks:**
   ```bash
   npm run prepare
   ```

## Usage

### Development server
Start the development server (using Vite):
```bash
npm run dev
```

### Building the library
Build the project for production (ESM, CJS, IIFE):
```bash
npm run build
```
Output files will be generated in the `dist` directory.

## Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the dev server |
| `npm run build` | Builds the library using `tsup` |
| `npm run test` | Runs tests once using `vitest` |
| `npm run test-watch` | Runs tests in watch mode |
| `npm run lint` | Lints the codebase using `oxlint` |
| `npm run format` | Formats the codebase using `prettier` |
| `npm run checks` | Runs format, lint, and test scripts sequentially |
| `npm run changelog` | Generates a changelog based on conventional commits |
| `npm run prepare` | Installs Husky git hooks |

## Project Structure

- `src/`: Source code of the library
- `dist/`: Compiled code (generated after build)
- `test/`: Unit tests

## Committing

This project uses **Conventional Commits**. When you commit, `commitlint` will check your commit message.
Format: `<type>(<scope>): <subject>`

Examples:
- `feat: add new graph algorithm`
- `fix: resolve crash on startup`
- `chore: update dependencies`

## License

MIT
