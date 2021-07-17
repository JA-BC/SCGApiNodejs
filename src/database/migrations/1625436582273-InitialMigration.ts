import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1625436582273 implements MigrationInterface {
    name = 'InitialMigration1625436582273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `TipoCategoria` (`id` int NOT NULL AUTO_INCREMENT, `descripcion` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Categoria` (`id` int NOT NULL AUTO_INCREMENT, `nombre` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `tipoCategoriaId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Balance` (`id` int NOT NULL AUTO_INCREMENT, `costo` int NOT NULL, `descripcion` varchar(255) NOT NULL, `fecha` datetime NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `categoriaId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `Categoria` ADD CONSTRAINT `FK_deee67e4b7fb797d636502df198` FOREIGN KEY (`tipoCategoriaId`) REFERENCES `TipoCategoria`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `Balance` ADD CONSTRAINT `FK_1bfcff88f88e9ad329af6e2c7de` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Balance` DROP FOREIGN KEY `FK_1bfcff88f88e9ad329af6e2c7de`");
        await queryRunner.query("ALTER TABLE `Categoria` DROP FOREIGN KEY `FK_deee67e4b7fb797d636502df198`");
        await queryRunner.query("DROP TABLE `Balance`");
        await queryRunner.query("DROP TABLE `Categoria`");
        await queryRunner.query("DROP TABLE `TipoCategoria`");
    }

}
