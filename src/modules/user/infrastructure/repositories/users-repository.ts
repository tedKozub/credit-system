import { BadRequestException, Injectable } from '@nestjs/common';
import { Kysely } from 'kysely';
import { DB } from 'src/common/database/types/db';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { User } from '../../domain/user.model';
import { isDatabaseError } from 'src/common/database/types/database-error';
import { PostgresErrorCode } from 'src/common/database/types/postgres-error-code.enum';

@Injectable()
export class UsersRepository {
  constructor(private db: Kysely<DB>) {}

  async insert(userData: CreateUserDto) {
    try {
      const databaseResponse = await this.db
        .insertInto('users')
        .values({
          name: userData.name,
          credit: userData.credit,
        })
        .returningAll()
        .executeTakeFirstOrThrow();

      return new User(databaseResponse);
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

  async findById(id: number): Promise<User | undefined> {
    const databaseResponse = await this.db
      .selectFrom('users')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();

    if (databaseResponse) {
      return new User(databaseResponse);
    }
  }
}
