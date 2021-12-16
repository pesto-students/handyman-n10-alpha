import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserAddressIsDefault1639573323384 implements MigrationInterface {
  name = 'UpdateUserAddressIsDefault1639573323384';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_addresses" ALTER COLUMN "is_default" SET DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user_addresses" ALTER COLUMN "is_default" DROP DEFAULT`);
  }
}
