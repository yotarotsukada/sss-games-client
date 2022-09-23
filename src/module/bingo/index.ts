import { RouteRecordRaw } from 'vue-router';
import Bingo from './Bingo.vue';
import BingoRoom from './BingoRoom.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/bingo', name: 'bingo', component: Bingo },
  { path: '/bingo/:id', name: 'bingoRoom', component: BingoRoom },
];
