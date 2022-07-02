import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMenu1656734724932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Menu",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "description", type: "varchar(100)", isNullable: false },
          { name: "structure", type: "varchar(50)", isNullable: false },
          { name: "id_parent_menu", type: "int", isNullable: true },
          { name: "path_page", type: "varchar(250)", isNullable: true },
          { name: "icon", type: "varchar(250)", isNullable: true },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Menu");
  }
}
