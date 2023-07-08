export default {
  base: '',
  root: 'src',
  publicDir: '../electron',
  build: {
    outDir: '../build',
  },
  optimizeDeps: {
    esbuildOptions: { target: 'es2020' },
  },
  server: {
    port: 3000,
  },
}
