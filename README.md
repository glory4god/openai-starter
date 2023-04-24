### Apps and Packages

- `docs`: [Next.js](https://nextjs.org/) app
- `admin`: [Next.js](https://nextjs.org/) admin app
- `web`: [Next.js](https://nextjs.org/) service app
- `_mainlib`: React component library shared by both `web`, `docs` and `admin` applications
- `ui`: React component library shared by both `web`, `docs` and `admin` applications
- `eslint-config-custom`: `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `exam-bomb-constants`: setting coomon constants

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn run dev
```
