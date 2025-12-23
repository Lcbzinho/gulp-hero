import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// =====================================================
// Configuração equivalente às tarefas do Gulp:
// - Compilação SASS: Nativo via pacote 'sass'
// - Compressão de JS: Terser em build.minify
// - Compressão de imagens: Plugin interno do Vite
// =====================================================
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuração de CSS/SASS
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_variables" as *; @use "@/styles/_mixins" as *;`,
      },
    },
    devSourcemap: true,
  },
  // Otimização de build (equivalente à compressão JS do Gulp)
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Otimização de assets
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
  },
  // Otimização de dependências
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));
