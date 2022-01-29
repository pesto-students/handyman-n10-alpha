import { Role } from '@the-crew/common/enums';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from '../../app/user/models/entities';

export class AddGuestUser1643475655223 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const repo = queryRunner.connection.getRepository(UserEntity);
    const user = repo.create({
      firstName: 'Guest',
      lastName: 'User',
      email: 'guest@thecrew.com',
      password: 'Password@123',
      role: [Role.USER],
    });
    await repo.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(UserEntity).delete({
      email: 'guest@thecrew.com',
    });
  }
}
