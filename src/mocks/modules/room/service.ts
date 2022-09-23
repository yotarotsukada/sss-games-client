import { faker } from '@faker-js/faker';
import { CreateRoomArgs, RoomType } from '../../../types/room';
import { rooms } from './model';

export class RoomService {
  private rooms = rooms;

  public findAll = (): RoomType[] => {
    return this.rooms;
  };

  public findById = (id: string): RoomType => {
    const room = this.rooms.find((room) => room.id === id);
    if (!room) {
      throw new Error('Room not found');
    }
    return room;
  };

  public findByOwnerId = (ownerId: string): RoomType[] => {
    return this.rooms.filter((room) => {
      return room.ownerId === ownerId;
    });
  };

  public create = ({ ownerId, name, password }: CreateRoomArgs): RoomType => {
    const now = new Date();
    const room = {
      id: `room-${rooms.length}`,
      ownerId,
      createdAt: now,
      lastUpdatedAt: now,
      isOpen: true,
      isStarted: false,
      name,
      password,
    };
    this.rooms.push(room);
    return room;
  };
}
