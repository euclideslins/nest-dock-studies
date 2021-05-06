import { Controller, Get } from '@nestjs/common';
import { User } from './models/User';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async all(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
