import riot from 'rollup-plugin-riot';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import postcss from 'postcss';
import postcssCssnext from 'postcss-cssnext';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
// import uglify from 'rollup-plugin-uglify';
// import { minify } from 'uglify-js-harmony'

export default {
  entry: 'src/client/main.js',
  dest: 'src/static/js/main.min.js',
  format: 'iife',
  plugins: [
    globals(),
    builtins(),
    riot({
      style: 'cssnext',
      parsers: {
        css: { cssnext }
      }
    }),
    resolve({jsnext: true }),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        // 'node_modules/fetch/lib/fetch.js': [ 'fetchUrl' ]
      }
    }),
    buble()//,
    // uglify({}, minify)
  ]
}


/**
 * Transforms new CSS specs into more compatible CSS
 */
function cssnext (tagName, css) {
  // A small hack: it passes :scope as :root to PostCSS.
  // This make it easy to use css variables inside tags.
  css = css.replace(/:scope/g, ':root')
  css = postcss([postcssCssnext]).process(css).css
  css = css.replace(/:root/g, ':scope')
  return css
}