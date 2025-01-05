const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  platform: 'node', // or 'browser'
  format: 'cjs',    // or 'esm'
  sourcemap: true,  // optional, generates a sourcemap
  target: ['node16'], // specify the target environment
}).catch(() => process.exit(1));

