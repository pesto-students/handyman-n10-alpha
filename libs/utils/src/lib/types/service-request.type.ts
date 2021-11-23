import { IOwnerTimestamp, IUser } from '.';
import { ServiceRequestType } from '../enums';
import { uuid } from './util.types';

export interface IServiceRequest extends IOwnerTimestamp {
  id: uuid;
  type: ServiceRequestType;
  description: string;
  price: number;
  user?: IUser;
  userId: uuid;
}
