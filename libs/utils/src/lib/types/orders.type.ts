import { IOwnerTimestamp } from '.';
import { ISubOrder, IUser } from '../types';
import { uuid } from './util.types';

export interface IOrder extends IOwnerTimestamp {
  id: uuid;
  subOrderIds: uuid[];
  subOrders?: ISubOrder[];
  consumerId: uuid;
  consumer?: IUser;
}
