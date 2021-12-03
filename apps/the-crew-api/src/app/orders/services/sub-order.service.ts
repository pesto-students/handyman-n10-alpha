import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SubOrder } from '@the-crew/common';
import { Repository } from 'typeorm';

import { SubOrderEntity } from '../models/entities/sub-order.entity';

@Injectable()
export class SubOrderService extends TypeOrmCrudService<SubOrder> {
  constructor(
    @InjectRepository(SubOrderEntity)
    readonly subOrdersRepo: Repository<SubOrder>,
  ) {
    super(subOrdersRepo);
  }
}
