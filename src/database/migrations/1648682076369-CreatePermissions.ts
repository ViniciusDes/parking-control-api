import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreatePermissions1648682076369 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "permissions",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "description",
            type: "varchar(250)",
          },
          {
            name: "situation",
            type: "varchar(1)",
            default: 1,
          },
        ],
      })
    );

    await queryRunner.addColumn(
      "permissions",
      new TableColumn({
        name: "id_company",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "permissions",
      new TableForeignKey({
        columnNames: ["id_company"],
        referencedColumnNames: ["id"],
        referencedTableName: "companies",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("permissions");
    const foreignKeyCompany = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_company") !== -1);
    await queryRunner.dropForeignKey("permissions", foreignKeyCompany);
    await queryRunner.dropColumn("permissions", "id_company");
    await queryRunner.dropTable("permissions");
  }
}
