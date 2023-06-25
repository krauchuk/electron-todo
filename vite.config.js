export default {
  base: '',
  root: 'src',
  publicDir: '../public',
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
