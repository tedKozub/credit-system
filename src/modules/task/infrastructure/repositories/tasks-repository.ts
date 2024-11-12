import { BadRequestException, Injectable } from '@nestjs/common';
import { Task } from '../../domain/models/task.model';
import { Kysely } from 'kysely';
import { DB } from 'src/common/database/types/db';
import { CreateTaskDto } from '../../application/dtos/create-task.dto';
import { isDatabaseError } from 'src/common/database/types/database-error';
import { PostgresErrorCode } from 'src/common/database/types/postgres-error-code.enum';

@Injectable()
export class TasksRepository {
  constructor(private db: Kysely<DB>) {}

  async insert(userData: CreateTaskDto) {
    try {
      const databaseResponse = await this.db
        .insertInto('tasks')
        .values({
          name: userData.name,
        })
        .returningAll()
        .executeTakeFirstOrThrow();

      return new Task(databaseResponse);
    } catch (error) {
      if (
        isDatabaseError(error) &&
        error.code === PostgresErrorCode.UniqueViolation
      ) {
        throw new BadRequestException('User with this email already exists');
      }
      throw error;
    }
  }

  async findById(id: number): Promise<Task | undefined> {
    const databaseResponse = await this.db
      .selectFrom('tasks')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();

    if (databaseResponse) {
      return new Task(databaseResponse);
    }
  }
}
