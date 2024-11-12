import { Module } from '@nestjs/common';
import { TaskController } from '../task/presentation/controllers/task.controller';
import { UsersRepository } from './infrastructure/repositories/users-repository';
import { UsersUseCases } from './application/use-cases/users.use-cases';
import { UserController } from './presentation/user.controller';

@Module({
  controllers: [UserController],
  providers: [UsersUseCases, UsersRepository],
})
export class UserModule {}
