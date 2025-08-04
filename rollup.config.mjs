import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',              // Your library entry point
  output: {
    file: 'dist/my-library.js',   // Browser-ready file
    format: 'umd',                // Universal (works everywhere)
    name: 'MyLibrary'             // Global variable name for browser
  },
  plugins: [resolve(), commonjs()]
};
