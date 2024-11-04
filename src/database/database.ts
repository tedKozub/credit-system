// TODO: import tables from each module

import { Kysely } from 'kysely';
import { AppTable } from 'src/app-table';

// and add them to the Tables type
export type Tables = {
  app: AppTable;
};

export class Database extends Kysely<Tables> { }
