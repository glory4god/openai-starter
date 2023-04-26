### Open AI Starter

- The introduction was written by Open AI.

### Project Introduction

- Me : Can you introduce your project?
- AI : Open AI Starter is a template project that allows users to quickly and easily integrate Open AI's AI services into their own projects. The project provides a simple framework for using Open AI's services to create chatbots, completion services, and image creation using GPT models. All you need to do is get an API key from Open AI and you're ready to go! This is perfect for developers who want to explore the capabilities of Open AI's AI services without having to write any code from scratch.

[More Details](https://openai-starter-docs.vercel.app/)

### Preparation

- Issuing keys from OpenAI
- Create .env file in apps/web path and write OPENAI_API_KEY="KEY"
- yarn install
- yarn run dev

### Apps and Packages

- `docs`: [Next.js](https://nextjs.org/) app
- `web`: [Next.js](https://nextjs.org/) service app
- `_mainlib`: React component library shared by both `web` applications
- `ui`: React component library shared by both `web` applications
- `eslint-config-custom`: `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package, app is 100% [TypeScript](https://www.typescriptlang.org/).

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
