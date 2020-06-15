import { Injectable } from '@nestjs/common';
import { userSub } from './api-sample-data';
import { User } from './models/user';

@Injectable()
export class ApiDataService {
  constructor() {
    // Inject any data providers here
  }

  createUser(user: Partial<User>) {
    return userSub.next([...userSub.getValue(), <User>user]);
  }

  getUsers(): Promise<User[]> {
    return Promise.resolve(userSub.getValue());
  }

  getUserByEmail(email: string): Promise<User> {
    return Promise.resolve(
      userSub.getValue().find((user) => user.email === email)
    );
  }

  getUserById(userId: string): Promise<User> {
    return Promise.resolve(
      userSub.getValue().find((user) => user.id === userId)
    );
  }

  getUserByUsername(username: string): Promise<User> {
    return Promise.resolve(
      userSub.getValue().find((user) => user.username === username)
    );
  }
}
