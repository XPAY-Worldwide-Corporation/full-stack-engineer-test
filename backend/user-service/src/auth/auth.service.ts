import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; // Assume this service communicates with the user-service

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<string | null> {
    const user = await this.userService.validateUser(username, password);
    if (user) {
      const payload = { username: user.username, sub: user.userId };
      return this.jwtService.sign(payload);
    }
    return null;
  }
}
