import { Maybe, ResolverFunc } from '@/mocks/types';
import { userService } from './service';

const { CURRENT_USER_ID } = useConstants();

export class UserResolver {
  private userService = userService;

  public get: ResolverFunc<never, never, Maybe<UserType>> = async (
    req,
    res,
    ctx
  ) => {
    try {
      const result = await this.userService.findById(CURRENT_USER_ID);
      return res(ctx.status(200), ctx.json(result));
    } catch (error) {
      return res(ctx.status(404), ctx.json(new Error()));
    }
  };
}
