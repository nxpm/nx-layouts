import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ApiDataService } from '@sandbox/api/data';

@Injectable()
export class ApiAuthService {
  constructor(private readonly data: ApiDataService) {}

  async login(username: string, password: string) {
    //
    const user = await this.data.getUserByUsername(username);

    if (!user) {
      throw new UnauthorizedException(`User not found`);
    }
    // In the real world you want to use encrypted passwords
    if (user.password !== password) {
      throw new UnauthorizedException(`Password is incorrect`);
    }
    // Sign the token, etc.
  }

  async register(email: string, username: string, password: string) {
    const usernameExists = await this.data.getUserByUsername(username);
    const emailExists = await this.data.getUserByEmail(email);

    if (usernameExists || emailExists) {
      throw new UnauthorizedException(`Username or email already exists`);
    }

    const saved = await this.data.createUser({ username, password });
    // Sign the token, etc.
  }
}
