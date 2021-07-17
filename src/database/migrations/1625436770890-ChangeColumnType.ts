import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeColumnType1625436770890 implements MigrationInterface {
    name = 'ChangeColumnType1625436770890'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Categoria` DROP COLUMN `nombre`");
        await queryRunner.query("ALTER TABLE `Categoria` ADD `nombre` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Categoria` DROP COLUMN `nombre`");
        await queryRunner.query("ALTER TABLE `Categoria` ADD `nombre` int NOT NULL");
    }

}
