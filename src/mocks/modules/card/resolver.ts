import { CreateCardArgs } from '@/types';
import { PathParams, ResponseResolver, RestContext, RestRequest } from 'msw';
import { CardService } from './service';

export class CardResolver {
  private cardService = new CardService();

  public create: ResponseResolver<
    RestRequest<never, PathParams<string>>,
    RestContext
  > = async (req, res, ctx) => {
    const args: CreateCardArgs = await req.json();

    const password = args.password;
    if (password && password != 'password') {
      return res(ctx.status(401), ctx.json(new Error('unauthorized')));
    }

    const result = this.cardService.create();
    return res(ctx.status(200), ctx.json(result));
  };
}
