import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/browser.tsx',
  output: {
    dir: 'dist'
  },
  plugins: [typescript()]
}
