import { OrderStatus } from '@the-crew/common';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { OrderEntity, SubOrderEntity } from '../../app/orders/models/entities';
import { ServiceRequestEntity } from '../../app/service-request/models/entities';
import { UserEntity } from '../../app/user/models/entities';

export class AddSubOrders1639143023164 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const consumer = await queryRunner.connection
      .getRepository(UserEntity)
      .findOne({ email: 'krishna@thecrew.com' });
    const provider = await queryRunner.connection
      .getRepository(UserEntity)
      .findOne({ email: 'professional@thecrew.com' });
    const order = await queryRunner.connection
      .getRepository(OrderEntity)
      .findOne({ consumerId: consumer.id });
    const service = await queryRunner.connection
      .getRepository(ServiceRequestEntity)
      .findOne({ providerId: provider.id });
    const repo = queryRunner.connection.getRepository(SubOrderEntity);
    const subOrders = repo.create([
      {
        serviceId: service.id,
        ratingId: null,
        orderId: order.id,
        status: OrderStatus.SCHEDULED,
        quantity: 2,
        price: service.price,
      },
      {
        serviceId: service.id,
        ratingId: null,
        orderId: order.id,
        status: OrderStatus.COMPLETED,
        quantity: 1,
        price: service.price,
      },
      {
        serviceId: service.id,
        ratingId: null,
        orderId: order.id,
        status: OrderStatus.CANCELLED,
        quantity: 1,
        price: service.price,
      },
    ]);
    await repo.save(subOrders);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(SubOrderEntity).clear();
  }
}
