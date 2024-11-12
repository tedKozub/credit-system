import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from '../../infrastructure/repositories/users-repository';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../../domain/user.model';

@Injectable()
export class UsersUseCases {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(user: CreateUserDto): Promise<User> {
    return this.usersRepository.insert(user);
  }

  async getUser(id: number): Promise<User> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }
}
