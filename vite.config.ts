import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['src/constants/', 'src/module/*/api/'],
    }),
    Components({
      dirs: ['src/components/', 'src/**/components'],
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@/': path.join(__dirname, 'src/'),
    },
  },
});
