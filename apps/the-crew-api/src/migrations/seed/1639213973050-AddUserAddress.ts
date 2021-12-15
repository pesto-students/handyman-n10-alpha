import { MigrationInterface, QueryRunner } from 'typeorm';
import { UserAddressEntity } from '../../app/user/models/entities';
import { UserEntity } from '../../app/user/models/entities/user.entity';

export class AddUserAddress1639213973050 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const user = await queryRunner.connection
      .getRepository(UserEntity)
      .findOne({ email: 'customer@thecrew.com' });
    const repo = queryRunner.connection.getRepository(UserAddressEntity);
    const userAddresses = repo.create([
      {
        flat: 'DNo:- 27-379/2, Sri Nagar',
        street: 'Whitefield, Bangalore, Karnataka',
        isDefault: true,
        pinCode: 560066,
        userId: user.id,
      },
      {
        flat: 'Flat:- 207 Herohalli',
        street: 'Maruthi Nagar, Bangalore, Karnataka',
        isDefault: true,
        pinCode: 560091,
        userId: user.id,
      },
    ]);
    await repo.save(userAddresses);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(UserAddressEntity).clear();
  }
}
