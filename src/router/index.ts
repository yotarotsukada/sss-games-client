import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Messages from '@/pages/Messages.vue';
import { bingo } from '@/domains';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/messages', name: 'messages', component: Messages },
  ...bingo.routes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
