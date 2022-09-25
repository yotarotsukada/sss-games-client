import { ResolverFunc } from '@/mocks/types';
import { CardType, CreateCardArgs } from '@/types';
import { cardService } from './service';

export class CardResolver {
  private cardService = cardService;

  public create: ResolverFunc<CreateCardArgs, never, CardType> = async (
    req,
    res,
    ctx
  ) => {
    const args = await req.json<CreateCardArgs>();

    const password = args.password;
    if (password && password != 'password') {
      return res(ctx.status(401), ctx.json(new Error('unauthorized')));
    }

    try {
      const result = this.cardService.create();
      return res(ctx.status(200), ctx.json(result));
    } catch (error) {
      return res(ctx.status(404), ctx.json(new Error()));
    }
  };
}
