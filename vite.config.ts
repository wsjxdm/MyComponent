import { defineConfig } from 'vite'
import visualizer from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // 根据环境变量或 mode 来决定构建目标
  const isSite = mode === 'site' || process.env.BUILD_TARGET === 'site';

  if (isSite) {
    // 网站/Demo 构建配置 (用于 GitHub Pages)
    return {
      plugins: [react(),
        // visualizer({
        //   gzipSize: true,
        //   brotliSize: true,
        //   filename: 'dist/stats.html'
        // })
      ],
      base: process.env.NODE_ENV === 'production' ? '/MyComponent/' : '/',
      build: {
        outDir: 'dist-site',
        sourcemap: true,
      }
    }
  }

  // 默认库构建配置 (保留你之前的构建方式)
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      lib: {
        entry: "src/main.tsx", // 保持你之前的入口
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
  }
})
