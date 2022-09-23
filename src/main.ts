import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { worker } from './mocks/browser';
import { VueQueryPlugin } from 'vue-query';

if (process.env.NODE_ENV === 'development' || process.env.VITE_SERVICE_URL) {
  worker.start();
}

createApp(App).use(router).use(VueQueryPlugin).mount('#app');
