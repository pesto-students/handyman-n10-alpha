import { ISubOrder, IUser } from '@the-crew/common';
import { IOwnerTimestamp } from '.';
import { uuid } from './util.types';

export interface IOrder extends IOwnerTimestamp {
  id: uuid;
  subOrderIds: uuid[];
  subOrders?: ISubOrder[];
  consumerId: uuid;
  consumer?: IUser;
}
