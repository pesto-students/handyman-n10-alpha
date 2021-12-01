import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddReviewsEntity1638099678056 implements MigrationInterface {
  name = 'AddReviewsEntity1638099678056';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "reviews" ("created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_on" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying NOT NULL, "rating" numeric NOT NULL, "reviwer_id" uuid NOT NULL, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "reviews"`);
  }
}
