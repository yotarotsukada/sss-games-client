import { rest } from 'msw';
import { RoomResolver } from './modules/room/resolver';
import { UserResolver } from './modules/user/resolver';
import { CardResolver } from './modules/card/resolver';

const { DEV_SERVICE_URL } = useConstants();

const roomResolver = new RoomResolver();
const userResolver = new UserResolver();
const cardResolver = new CardResolver();

const endpoint = (path: string) => {
  return DEV_SERVICE_URL + path;
};

export const handlers = [
  rest.get(endpoint('/user'), userResolver.get),

  rest.get(endpoint('/rooms/users/:id'), roomResolver.findByOwnerId),
  rest.post(endpoint('/rooms'), roomResolver.create),

  rest.get(endpoint('/rooms/:id'), roomResolver.findById),

  rest.post(endpoint('/card'), cardResolver.create),
];
