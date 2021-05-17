import postcss from 'rollup-plugin-postcss'
import { babel } from '@rollup/plugin-babel'
import emitEJS from 'rollup-plugin-emit-ejs'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import { terser } from 'rollup-plugin-terser'
import livereload from 'rollup-plugin-livereload'
import replace from '@rollup/plugin-replace'
import serve from 'rollup-plugin-serve'
import path from 'path'

const distDirectory = path.resolve('./dist/')
const prodMode = !process.env.ROLLUP_WATCH;
const mode = prodMode ? 'production' : 'development'

const config = {
  input: `./src/entry`,
  output: {
    dir: distDirectory,
    format: 'iife',
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs(),
    babel({
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
      ],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    // emitEJS({
    //   src: 'src',
    // }),
    // postcss({
    //   extensions: ['.css'],
    //   inject: {
    //     insertAt: 'top',
    //   },
    // }),
    // replace({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    // }),
    // mode !== 'production' &&
    //   serve({
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //     contentBase: distDirectory,
    //   }),
    // mode !== 'production' &&
    //   livereload({
    //     watch: distDirectory,
    //   }),
  ],
};

export default config