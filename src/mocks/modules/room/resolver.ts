import { PathParams, ResponseResolver, RestContext, RestRequest } from 'msw';
import { RoomService } from './service';

export class RoomResolver {
  private roomService = new RoomService();

  public get: ResponseResolver<
    RestRequest<never, PathParams<string>>,
    RestContext
  > = async (req, res, ctx) => {
    const { id } = req.params as Record<string, string>;
    try {
      const result = await this.roomService.findByOwnerId(id);
      return res(ctx.status(200), ctx.json(result));
    } catch (error) {
      return res(ctx.status(304), ctx.json(new Error()));
    }
  };

  public post: ResponseResolver<
    RestRequest<never, PathParams<string>>,
    RestContext
  > = async (req, res, ctx) => {
    const { ownerId, name, password } = await req.json();

    try {
      const result = await this.roomService.create(ownerId, name, password);
      return res(ctx.status(200), ctx.json(result));
    } catch (error) {
      return res(ctx.status(304), ctx.json(new Error()));
    }
  };
}
