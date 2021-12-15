import { MigrationInterface, QueryRunner } from 'typeorm';

export class SuborderReviewOptional1639258710255 implements MigrationInterface {
  name = 'SuborderReviewOptional1639258710255';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sub_orders" DROP CONSTRAINT "FK_bcac51589751af4ac1e83076984"`,
    );
    await queryRunner.query(`ALTER TABLE "sub_orders" ALTER COLUMN "rating_id" DROP NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "sub_orders" ADD CONSTRAINT "FK_bcac51589751af4ac1e83076984" FOREIGN KEY ("rating_id") REFERENCES "reviews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sub_orders" DROP CONSTRAINT "FK_bcac51589751af4ac1e83076984"`,
    );
    await queryRunner.query(`ALTER TABLE "sub_orders" ALTER COLUMN "rating_id" SET NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "sub_orders" ADD CONSTRAINT "FK_bcac51589751af4ac1e83076984" FOREIGN KEY ("rating_id") REFERENCES "reviews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
