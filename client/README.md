# React + TypeScript + Vite

This template provides a minimal setup to get **React** working in **Vite** with **HMR (Hot Module Replacement)** and some basic ESLint rules.

---

## Features

- ⚡ Vite for lightning-fast development
- ⚛️ React with TypeScript
- 🔥 Fast Refresh support
- ✅ ESLint integration
- 🧹 Production-ready linting setup
- 🚀 Optimized developer experience

---

# Official React Plugins

Currently, two official plugins are available for React support in Vite.

---

## 1. `@vitejs/plugin-react`

Uses **Babel** for Fast Refresh.

### Install

```bash
npm install @vitejs/plugin-react --save-dev
```

---

## 2. `@vitejs/plugin-react-swc`

Uses **SWC** for Fast Refresh and faster builds.

### Install

```bash
npm install @vitejs/plugin-react-swc --save-dev
```

---

# ESLint Configuration

If you are developing a production-grade application, it is recommended to enable **type-aware lint rules** for better code quality and stricter type checking.

---

## Update `parserOptions`

Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',

    project: [
      './tsconfig.json',
      './tsconfig.node.json',
    ],

    tsconfigRootDir: __dirname,
  },
}
```

---

# Enable Type-Checked ESLint Rules

Replace:

```txt
plugin:@typescript-eslint/recommended
```

with either:

```txt
plugin:@typescript-eslint/recommended-type-checked
```

or

```txt
plugin:@typescript-eslint/strict-type-checked
```

---

# Optional Stylistic Rules

You can also enable stylistic type-checked rules:

```txt
plugin:@typescript-eslint/stylistic-type-checked
```

---

# React ESLint Support

Install the React ESLint plugin:

```bash
npm install eslint-plugin-react --save-dev
```

Then add the following to the `extends` array in your ESLint configuration:

```txt
plugin:react/recommended
plugin:react/jsx-runtime
```

---

# Example ESLint Configuration

```js
export default {
  extends: [
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',

    project: [
      './tsconfig.json',
      './tsconfig.node.json',
    ],

    tsconfigRootDir: __dirname,
  },
}
```

---

# Tech Stack

| Technology | Description |
|------------|-------------|
| React | Frontend UI Library |
| TypeScript | Static Type Checking |
| Vite | Fast Build Tool |
| ESLint | Code Linting |

---

# Getting Started

## Clone the Repository

```bash
git clone <your-repository-url>
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Build for Production

```bash
npm run build
```

---

# Recommended VS Code Extensions

- ESLint
- Prettier
- TypeScript Hero
- GitLens

---

# Learn More

- Vite Documentation
- React Documentation
- TypeScript Documentation
- ESLint Documentation

---

This project is licensed under the MIT License.
