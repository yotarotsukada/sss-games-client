import { Maybe, ResolverFunc } from '@/mocks/types';
import { CreateRoomArgs, RoomType } from '@/types';
import { roomService } from './service';

export class RoomResolver {
  private roomService = roomService;

  public findByOwnerId: ResolverFunc<never, { id: string }, RoomType[]> =
    async (req, res, ctx) => {
      const { id } = req.params;
      try {
        const result = await this.roomService.findByOwnerId(id);
        return res(ctx.status(200), ctx.json(result));
      } catch (error) {
        return res(ctx.status(404), ctx.json(new Error()));
      }
    };

  public findById: ResolverFunc<never, { id: string }, Maybe<RoomType>> =
    async (req, res, ctx) => {
      const { id } = req.params;
      try {
        const result = await this.roomService.findById(id);
        return res(ctx.status(200), ctx.json(result), ctx.delay(200));
      } catch (error) {
        return res(ctx.status(404), ctx.json(new Error()));
      }
    };

  public create: ResolverFunc<CreateRoomArgs, never, RoomType> = async (
    req,
    res,
    ctx
  ) => {
    const args = await req.json<CreateRoomArgs>();
    try {
      const result = await this.roomService.create(args);
      return res(ctx.status(200), ctx.json(result));
    } catch (error) {
      return res(ctx.status(404), ctx.json(new Error()));
    }
  };
}
