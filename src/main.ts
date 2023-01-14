import '@/styles/tailwind.css';
import '@/styles/index.css';
import App from './App.vue';
import router from '@/router/router';
import { worker } from '@/mocks/browser';
import { VueQueryPlugin, VueQueryPluginOptions } from 'vue-query';

const { ENABLE_MSW } = useConstants();
if (process.env.NODE_ENV === 'development' && ENABLE_MSW) {
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
  .use(VueQueryPlugin, vueQueryPluginOptions)
  .mount('#app');
