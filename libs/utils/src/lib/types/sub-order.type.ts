import { IOwnerTimestamp } from '.';
import { OrderStatus } from '../enums';
import { IOrder, IReview, IServiceRequest } from '../types';
import { uuid } from './util.types';

export interface ISubOrder extends IOwnerTimestamp {
  id: uuid;
  serviceId: uuid;
  service?: IServiceRequest;
  ratingId: uuid;
  rating?: IReview;
  status: OrderStatus;
  quantity: number;
  orderId: uuid;
  order?: IOrder;
  price: number;
}
