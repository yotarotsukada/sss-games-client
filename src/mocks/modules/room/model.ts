import { faker } from '@faker-js/faker';
import { randBetween } from '@/lib/random';
import { RoomType } from '@/types/room';
import { users } from '../user/model';

export const rooms: RoomType[] = [...Array(30)].map((_, index) => {
  const now = new Date();
  return {
    id: `room-${index}`,
    ownerId: users[randBetween(users.length)].id,
    createdAt: now,
    lastUpdatedAt: now,
    isOpen: true,
    isStarted: false,
    name: `${faker.word.adjective()}-${faker.word.noun()}`,
    password: '',
  };
});
