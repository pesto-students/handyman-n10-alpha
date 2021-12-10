import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SubOrder, uuid } from '@the-crew/common';
import { Repository } from 'typeorm';

import { OrderService } from '.';
import { SubOrderEntity } from '../models/entities/sub-order.entity';

@Injectable()
export class SubOrderService extends TypeOrmCrudService<SubOrder> {
  constructor(
    @InjectRepository(SubOrderEntity)
    readonly subOrdersRepo: Repository<SubOrder>,
    private readonly ordersService: OrderService,
  ) {
    super(subOrdersRepo);
  }
  public async GetSubOrdersByUserId(userId: uuid) {
    const orders = await this.ordersService.find({ consumerId: userId });
    const res = [];
    orders.forEach(async order => {
      const subOrders = await this.subOrdersRepo.find({ orderId: order.id });
      res.concat(subOrders);
    });
    return res;
  }
}
