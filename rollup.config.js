import path from 'path';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';

import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const customResolver = resolve({
  browser: true,
  dedupe: ['svelte'],
  extensions: ['.mjs', '.js', '.svelte'],
});
const projectRootDir = path.resolve(__dirname);
const aliases = ['modules', 'components', 'router', 'stores', 'api'];
const serve = () => {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        });
      }
    },
  };
};

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    // format: 'esm',
    // format: 'cjs',
    format: 'iife',
    name: 'app',
    dir: 'public/build',
  },
  plugins: [
    alias({
      entries: aliases.map((a) => (
        {
          find: a,
          replacement: path.resolve(projectRootDir, `src/${a}`),
        }
      )),
      customResolver,
    }),
    svelte({
      dev: !production,
      preprocess: autoPreprocess({
        postcss: true,
      }),
      css: (css) => {
        css.write('public/build/bundle.css');
      },
    }),
    customResolver,
    commonjs(),
    !production && serve(),
    !production && livereload('public'),
    production && terser({
      compress: {
        drop_console: true,
      },
    }),
  ],
  watch: {
    clearScreen: false,
  },
};
