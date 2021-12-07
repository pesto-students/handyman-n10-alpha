import { Role } from '@the-crew/common';
import { In, MigrationInterface, QueryRunner } from 'typeorm';

import { UserEntity } from '../../app/user/models/entities';

export class AddUsers1638707438702 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users = queryRunner.connection.getRepository(UserEntity).create([
      {
        firstName: 'Admin',
        lastName: 'Dummy',
        email: 'admin@thecrew.com',
        password: 'Password@123',
        phone: '+91-9988776655',
        role: [Role.ADMIN],
      },
      {
        firstName: 'Handyman',
        lastName: 'Dummy',
        email: 'handyman@thecrew.com',
        password: 'Password@123',
        phone: '+91-9595959595',
        role: [Role.HANDYMAN],
      },
      {
        firstName: 'Customer',
        lastName: 'Dummy',
        email: 'customer@thecrew.com',
        password: 'Password@123',
        phone: '+91-9090909090',
        role: [Role.USER],
      },
    ]);
    await queryRunner.connection.getRepository(UserEntity).save(users);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(UserEntity).delete({
      email: In(['admin@thecrew.com', 'handyman@thecrew.com', 'customer@thecrew.com']),
    });
  }
}
