import { PathParams, ResponseResolver, RestContext, RestRequest } from 'msw';
import { Constants } from '../../../constants';
import { UserService } from './service';

export class UserResolver {
  private userService = new UserService();

  public get: ResponseResolver<
    RestRequest<never, PathParams<string>>,
    RestContext
  > = async (req, res, ctx) => {
    try {
      const result = await this.userService.findById(Constants.CURRENT_USER_ID);
      return res(ctx.status(200), ctx.json(result));
    } catch (error) {
      return res(ctx.status(304), ctx.json(new Error()));
    }
  };
}
