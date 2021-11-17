import { IOwnerTimestamp, uuid } from '../../core/types';
import { Role } from '../enums';

export interface IUser extends IOwnerTimestamp {
  id: uuid;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: Role[];
}
