import { Maybe } from '@/mocks/types';
import { UserType } from '@/types/user';
import { users } from './model';

class UserService {
  private users = users;

  findAll = (): UserType[] => {
    return this.users;
  };

  findById = (id: string): Maybe<UserType> => {
    return this.users.find((user) => user.id === id);
  };
}

export const userService = new UserService();
