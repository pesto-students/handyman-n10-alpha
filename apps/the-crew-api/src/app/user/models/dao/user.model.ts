import { Role } from '../../enums';
import { IUser } from '../../types';

export class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: Role[];
  createdOn: Date;
  deletedOn: Date;
  modifiedOn: Date;
}
