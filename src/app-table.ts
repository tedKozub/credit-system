// TODO: use this as guidance for creating tables
// try to remove the apptable using a migration
import { ColumnType, Generated } from 'kysely';

export type AppTable = {
  id: Generated<number>;
  name: string;
  created_at: ColumnType<Date, string | Date | undefined, string | Date>;
};
