import { rest } from 'msw';
import { faker } from '@faker-js/faker';
import { Constants } from '../constants';

const endpoint = (path: string) => {
  return Constants.DEV_SERVICE_URL + path;
};

export const handlers = [
  rest.get(endpoint('/user'), (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        name: faker.name.firstName(),
      })
    );
  }),
];
