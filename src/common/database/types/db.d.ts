/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from 'kysely';

export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface App {
  created_at: Timestamp;
  id: Generated<number>;
  name: string;
}

export interface Tasks {
  created_at: Timestamp;
  id: Generated<number>;
  name: string;
}

export interface Users {
  id: Generated<number>;
  name: string;
  credit: number;
}

export interface DB {
  app: App;
  tasks: Tasks;
  users: Users;
}
