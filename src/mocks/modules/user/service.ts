import { UserType } from '../../../types/user';
import { users } from './model';

export class UserService {
  private users = users;

  findAll = (): UserType[] => {
    return this.users;
  };

  findById = (id: string): UserType => {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  };
}
