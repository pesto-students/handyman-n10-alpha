import { SubOrder } from '@the-crew/common';
import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsUUID, ValidateNested } from 'class-validator';

import { User } from '.';
import { IOrder, uuid } from '../types';

export class Order implements IOrder {
  @IsUUID()
  id: uuid;

  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  consumer?: User;

  @IsUUID('all', { each: true })
  subOrderIds: uuid[];

  @ValidateNested()
  @Type(() => SubOrder)
  @IsOptional()
  subOrders?: SubOrder[];

  @IsUUID()
  consumerId: uuid;

  @IsDate()
  createdOn: Date;

  @IsDate()
  modifiedOn: Date;

  @IsDate()
  deletedOn: Date;
}
