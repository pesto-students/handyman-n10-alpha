import { MigrationInterface, QueryRunner } from 'typeorm';

export class userRemoveOwnershipProps1637090635041 implements MigrationInterface {
  name = 'userRemoveOwnershipProps1637090635041';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_by"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "modified_by"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD "modified_by" uuid`);
    await queryRunner.query(`ALTER TABLE "users" ADD "created_by" uuid`);
  }
}
