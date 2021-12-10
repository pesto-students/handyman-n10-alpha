import { MigrationInterface, QueryRunner } from 'typeorm';
import { OrderEntity } from '../../app/orders/models/entities';
import { UserEntity } from '../../app/user/models/entities';

export class ordersAddOrders1639142182693 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const consumer = await queryRunner.connection
      .getRepository(UserEntity)
      .findOne({ email: 'krishna@thecrew.com' });
    const repo = queryRunner.connection.getRepository(OrderEntity);
    const orders = repo.create([
      {
        consumerId: consumer.id,
      },
      {
        consumerId: consumer.id,
      },
      {
        consumerId: consumer.id,
      },
    ]);
    await repo.save(orders);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(OrderEntity).clear();
  }
}
