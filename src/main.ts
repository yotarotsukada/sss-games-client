import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

createApp(App).use(router).mount('#app');
