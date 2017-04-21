import babel from 'rollup-plugin-babel';
// import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

var srcDir = 'c:/Programming/blogv2/src/'

export default {
  entry: srcDir + 'client/main.js',
  dest: srcDir + 'static/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    babel({
      exclude: 'node_modules/**'
      //presets: 'es2015-rollup'
    }),
    resolve({jsnext: true, main: true }),
    commonjs(),
    // uglify()
  ]
}