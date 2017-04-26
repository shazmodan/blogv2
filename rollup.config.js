import riot from 'rollup-plugin-riot';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js-harmony';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

export default {
  entry: 'src/client/main.js',
  dest: 'src/static/app/main.min.js',
  format: 'iife',
  plugins: [
    postcss({
      plugins: [
        cssnext({ warnForDuplicates: false }),
        cssnano()
      ],
      extensions: ['.css']
    }),
    globals(),
    builtins(),
    riot(),
    resolve({jsnext: true }),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        // 'node_modules/fetch/lib/fetch.js': [ 'fetchUrl' ]
      }
    }),
    buble(),
    uglify({}, minify),
  ]
}
