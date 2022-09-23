import { rest } from 'msw';
import { Constants } from '../constants';
import { RoomResolver } from './modules/room/resolver';
import { UserResolver } from './modules/user/resolver';

const roomResolver = new RoomResolver();
const userResolver = new UserResolver();

const endpoint = (path: string) => {
  return Constants.DEV_SERVICE_URL + path;
};

export const handlers = [
  rest.get(endpoint('/user'), userResolver.get),

  rest.get(endpoint('/rooms/users/:id'), roomResolver.get),
  rest.post(endpoint('/rooms'), roomResolver.post),
];
