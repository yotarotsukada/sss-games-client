import { createApp } from 'vue';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from '@/router';
import { worker } from '@/mocks/browser';
import { VueQueryPlugin, VueQueryPluginOptions } from 'vue-query';

if (process.env.NODE_ENV === 'development' || process.env.VITE_SERVICE_URL) {
  worker.start();
}

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
};

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(VueQueryPlugin, vueQueryPluginOptions)
  .mount('#app');
