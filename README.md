# esbuild-ts-starter

## Setup

```
npm install esbuild --save-dev
npx esbuild src/index.ts --bundle --outfile=dist/bundle.js --platform=node --format=cjs
npm install typescript --save-dev
npx tsc --init
```

## Get started

Output is generated into `./dist`.

```
pnpm build
```