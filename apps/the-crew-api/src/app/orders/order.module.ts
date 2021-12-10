import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderController, SubOrderController } from './controllers';
import { OrderEntity, SubOrderEntity } from './models/entities';
import { OrderService, SubOrderService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([SubOrderEntity, OrderEntity])],
  controllers: [SubOrderController, OrderController],
  providers: [SubOrderService, OrderService],
  exports: [SubOrderService, OrderService],
})
export class OrderModule {}
