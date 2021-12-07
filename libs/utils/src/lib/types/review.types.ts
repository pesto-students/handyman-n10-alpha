import { IOwnerTimestamp, IServiceRequest, IUser } from '.';
import { uuid } from './util.types';

export interface IReview extends IOwnerTimestamp {
  id: uuid;
  rating: number;
  comment: string;
  reviewer?: IUser;
  reviewerId: uuid;
  service?: IServiceRequest;
  serviceId: uuid;
}
