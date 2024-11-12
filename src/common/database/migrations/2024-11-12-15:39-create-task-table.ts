import { Kysely } from 'kysely';
import { DB } from '../types/db';

export async function up(database: Kysely<DB>): Promise<void> {
  await database.schema
    .createTable('tasks')
    .addColumn('id', 'serial', (column) => column.primaryKey())
    .addColumn('name', 'text', (column) => column.notNull())
    .addColumn('created_at', 'timestamptz', (column) => column.notNull())
    .execute();
}

export async function down(database: Kysely<unknown>): Promise<void> {
  await database.schema.dropTable('tasks').execute();
}
