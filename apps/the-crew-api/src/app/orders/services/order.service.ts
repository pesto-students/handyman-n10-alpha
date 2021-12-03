import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Order } from '@the-crew/common';
import { Repository } from 'typeorm';

import { OrderEntity } from '../models/entities';

@Injectable()
export class OrderService extends TypeOrmCrudService<Order> {
  constructor(
    @InjectRepository(OrderEntity)
    readonly ordersRepo: Repository<Order>,
  ) {
    super(ordersRepo);
  }
}
