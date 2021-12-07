import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddServiceRequestRelationWithReview1638820057356 implements MigrationInterface {
  name = 'AddServiceRequestRelationWithReview1638820057356';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "reviews" ADD "service_id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "reviews" ADD CONSTRAINT "FK_6587db79174d07150fde1f1a4d6" FOREIGN KEY ("service_id") REFERENCES "service_requests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reviews" DROP CONSTRAINT "FK_6587db79174d07150fde1f1a4d6"`,
    );
    await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "service_id"`);
  }
}
