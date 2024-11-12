import { Injectable } from '@nestjs/common';
import { Kysely } from 'kysely';
import { DB } from 'src/common/database/types/db';
import { CreateUserDto } from '../../application/dtos/create-user.dto';

@Injectable()
export class TasksRepository {
  constructor(private db: Kysely<DB>) {}

  async insert(userData: CreateUserDto) {
    try {
      const databaseResponse = await this.db
        .insertInto('users')
        .values({
          name: userData.name,
          credit: 
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
