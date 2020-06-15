import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';

const range = (start: number = 0, end: number = 10): number[] =>
  Array.from({ length: end }, (v, k) => k + start);

export const userSub = new BehaviorSubject<User[]>(
  range(1, 10).map((id) => ({
    id: `${id}`,
    name: `User ${id}`,
    username: `user-${id}`,
    email: `user-${id}@nxpm.dev`,
    password: `password-${id}`,
  }))
);
