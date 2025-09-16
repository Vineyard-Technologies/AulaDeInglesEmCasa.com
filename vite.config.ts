import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: ['@vite/client', '@vite/env']
  },
  build: {
    outDir: 'docs',
    // Enable source maps for better debugging
    sourcemap: false,
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor libraries
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-ui': ['lucide-react'],
          // Your components and pages
          'pages': [
            './src/pages/HomePage.jsx',
            './src/pages/AboutPage.jsx',
            './src/pages/BlogPage.jsx',
            './src/pages/ContactPage.jsx'
          ],
          'service-pages': [
            './src/pages/services/AulaIndividualPage.jsx',
            './src/pages/services/AulaOnlinePage.jsx',
            './src/pages/services/AulaEmGrupoPage.jsx',
            './src/pages/services/AulaDeConversacaoPage.jsx'
          ],
          'components': [
            './src/components/ui/button.jsx',
            './src/components/ui/card.jsx',
            './src/components/LazyImage.jsx',
            './src/components/GoogleMap.jsx',
            './src/components/RelatedBlogPosts.jsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  // Preview server optimization
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
});
