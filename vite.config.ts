import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "MyUI",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", ".trae"],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true
  }
})
