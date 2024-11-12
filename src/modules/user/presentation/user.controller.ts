import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../application/dtos/create-user.dto';
import { UsersUseCases } from '../application/use-cases/users.use-cases';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly usersUseCases: UsersUseCases) {}

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.usersUseCases.getUser(id);
  }

  @Post('')
  async createUser(@Body() user: CreateUserDto) {
    return this.usersUseCases.createUser(user);
  }
}
