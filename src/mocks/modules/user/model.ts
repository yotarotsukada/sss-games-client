import { faker } from '@faker-js/faker';
import { UserType } from '@/types/user';

export const users: UserType[] = [...Array(10)].map((_, index) => {
  const now = new Date();
  return {
    id: `user-${index}`,
    createdAt: now,
    lastUpdatedAt: now,
    name: faker.name.fullName(),
    password: faker.internet.password(),
  };
});
