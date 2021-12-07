import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateIncludedAndExcludedColumn1638739367056 implements MigrationInterface {
    name = 'UpdateIncludedAndExcludedColumn1638739367056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_requests" ALTER COLUMN "included" SET DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "service_requests" ALTER COLUMN "excluded" SET DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_requests" ALTER COLUMN "excluded" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "service_requests" ALTER COLUMN "included" DROP DEFAULT`);
    }

}
