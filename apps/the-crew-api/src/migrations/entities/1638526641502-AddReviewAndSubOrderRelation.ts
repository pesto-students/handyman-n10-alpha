import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddReviewAndSubOrderRelation1638526641502 implements MigrationInterface {
  name = 'AddReviewAndSubOrderRelation1638526641502';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "reviews" RENAME COLUMN "reviwer_id" TO "reviewer_id"`);
    await queryRunner.query(
      `ALTER TABLE "sub_orders" ADD CONSTRAINT "UQ_bcac51589751af4ac1e83076984" UNIQUE ("rating_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "sub_orders" ADD CONSTRAINT "FK_bcac51589751af4ac1e83076984" FOREIGN KEY ("rating_id") REFERENCES "reviews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sub_orders" DROP CONSTRAINT "FK_bcac51589751af4ac1e83076984"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sub_orders" DROP CONSTRAINT "UQ_bcac51589751af4ac1e83076984"`,
    );
    await queryRunner.query(`ALTER TABLE "reviews" RENAME COLUMN "reviewer_id" TO "reviwer_id"`);
  }
}
