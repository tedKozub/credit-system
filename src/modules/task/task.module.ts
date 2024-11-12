import { Module } from '@nestjs/common';
import { TaskController } from './presentation/controllers/task.controller';
import { TasksUseCases } from './application/use-cases/tasks.use-cases';
import { TasksRepository } from './infrastructure/repositories/tasks-repository';

@Module({
  controllers: [TaskController],
  providers: [TasksUseCases, TasksRepository],
})
export class TaskModule {}
