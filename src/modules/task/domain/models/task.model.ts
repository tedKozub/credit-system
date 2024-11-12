import { IEntity } from '../../../shared/IEntity';

type TaskModelData = {
  id: number;
  name: string;
  created_at: Date;
};

export class Task implements IEntity {
  id?: number;
  name: string;
  createdAt: Date;

  constructor({ id, name, created_at }: TaskModelData) {
    this.id = id;
    this.name = name;
    this.createdAt = created_at;
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof Task)) {
      return false;
    }

    return this.id === entity.id;
  }
}
