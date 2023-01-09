import { RouteRecordRaw } from 'vue-router';
import Bingo from './pages/Bingo.vue';
import BingoRoom from './pages/BingoRoom.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/bingo', name: 'bingo', component: Bingo },
  { path: '/bingo/:id', name: 'bingoRoom', component: BingoRoom },
];
