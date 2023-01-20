import { rest } from 'msw';
import { mockRoom } from './data/mockRoom';
import { mockUser } from './data/mockUser';

const { SERVICE_URL } = useConstants();

const endpoint = (path: string) => {
  return SERVICE_URL + path;
};

export const handlers = [
  rest.get(endpoint('/user'), (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockUser.one))
  ),

  rest.get(endpoint('/rooms/users/:id'), (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockRoom.many))
  ),

  rest.get(endpoint('/rooms/:id'), (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockRoom.one))
  ),
];
