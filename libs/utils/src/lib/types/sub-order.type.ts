import { IOwnerTimestamp } from '.';
import { uuid } from './util.types';
import { IOrder, IReview, IServiceRequest, OrderStatus } from '@the-crew/common';

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
