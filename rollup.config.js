import replace from 'rollup-plugin-replace';
import rimraf from 'rimraf';

rimraf.sync('dist');

const pkg = require('./package.json');
const { version } = pkg;

export default {
  input: 'src/scripts/app.js',
  output: {
    file: 'dist/app.js',
    format: 'iife'
  },
  plugins: [
    replace({
      delimiters: ['{{', '}}'],
      version
    })
  ]
}