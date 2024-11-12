import { Global, Module } from '@nestjs/common';
import {
  ConfigurableDatabaseModule,
  DATABASE_OPTIONS,
} from './database.module-definition';
import { DatabaseOptions } from './types/database-options';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import { DB } from './types/db';

@Global()
@Module({
  exports: [Kysely],
  providers: [
    {
      provide: Kysely,
      inject: [DATABASE_OPTIONS],
      useFactory: (databaseOptions: DatabaseOptions) => {
        const dialect = new PostgresDialect({
          pool: new Pool({
            host: databaseOptions.host,
            port: databaseOptions.port,
            user: databaseOptions.user,
            password: databaseOptions.password,
            database: databaseOptions.database,
          }),
        });

        return new Kysely<DB>({
          dialect,
        });
      },
    },
  ],
})
export class DatabaseModule extends ConfigurableDatabaseModule {}
