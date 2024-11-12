import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TasksUseCases } from '../../application/use-cases/tasks.use-cases';
import { CreateTaskDto } from '../../application/dtos/create-task.dto';

@ApiTags('Task')
@Controller('tasks')
export class TaskController {
  constructor(private readonly tasksUseCases: TasksUseCases) {}

  @Get(':id')
  async getTask(@Param('id') id: number) {
    return this.tasksUseCases.getTask(id);
  }

  @Post('')
  async createTask(@Body() task: CreateTaskDto) {
    return this.tasksUseCases.createTask(task);
  }
}
