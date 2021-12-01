import { IOwnerTimestamp, IUser, IRating } from '.';
import { ServiceRequestType } from '../enums';
import { uuid } from './util.types';

export interface IServiceRequest extends IOwnerTimestamp {
  id: uuid;
  type: ServiceRequestType[];
  title: string;
  description: string;
  included: string[];
  excluded: string[];
  price: number;
  provider?: IUser;
  providerId: uuid;
  //rating?: IRating;
  //ratingId: uuid;
}
