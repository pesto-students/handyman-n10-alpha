import { IUserAddress } from '.';
import { Role } from '../enums';
import { IOwnerTimestamp } from './ownership-timestamp.type';
import { uuid } from './util.types';

export interface IUser extends IOwnerTimestamp {
  id: uuid;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: Role[];
  addresses: IUserAddress[];
}
