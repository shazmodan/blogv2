import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  // tell rollup our main entry point
  entry: 'src/app.js',
  dest: 'dist/rollup-bundle.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: 'es2015-rollup'
    }),
    uglify()
  ]
}