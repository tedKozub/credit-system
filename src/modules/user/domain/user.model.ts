import { IEntity } from '../../shared/IEntity';

type UserModelData = {
  id: number;
  name: string;
  credit: number;
};

export class User implements IEntity {
  id?: number;
  name: string;
  credit: number;

  constructor({ id, name, credit }: UserModelData) {
    this.id = id;
    this.name = name;
    this.credit = credit;
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof User)) {
      return false;
    }

    return this.id === entity.id;
  }
}
