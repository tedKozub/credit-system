import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from 'src/modules/task/domain/models/task.model';
import { TasksRepository } from '../../infrastructure/repositories/tasks-repository';
import { CreateTaskDto } from '../dtos/create-task.dto';

@Injectable()
export class TasksUseCases {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async createTask(task: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.insert(task);
  }

  async getTask(id: number): Promise<Task> {
    const task = await this.tasksRepository.findById(id);
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }
}
