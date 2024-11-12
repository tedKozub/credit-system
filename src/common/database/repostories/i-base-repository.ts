import {
  DeleteResult,
  Insertable,
  InsertResult,
  Selectable,
  Updateable,
  UpdateResult,
} from 'kysely';
import { DB } from '../types/db';

export interface IBaseRepository<Table extends keyof DB> {
  insert(
    values: Insertable<DB[Table]> | Insertable<DB[Table]>[],
  ): Promise<InsertResult[]>;

  update(
    whereCondition: Partial<Selectable<DB[Table]>>,
    values: Updateable<DB[Table]>,
  ): Promise<UpdateResult>;

  delete(whereCondition: number): Promise<DeleteResult>;

  findOneById(whereCondition: number): Promise<any>;

  findMany(whereCondition?: Partial<Selectable<DB[Table]>>): Promise<any[]>;
}
