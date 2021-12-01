import { IOwnerTimestamp, IUser, IServiceRequest } from '.';
// import { ServiceRequestType } from '../enums';
import { uuid } from './util.types';

export interface IRating extends IOwnerTimestamp {
  id: uuid;
  rating: number;
  comment: string;
  reviwer?: IUser;
  reviwerId: uuid;
}
