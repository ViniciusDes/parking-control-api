import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateGroups1649201600962 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "groups",
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
        ],
      })
    );

    await queryRunner.addColumn(
      "groups",
      new TableColumn({
        name: "id_company",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "groups",
      new TableForeignKey({
        columnNames: ["id_company"],
        referencedColumnNames: ["id"],
        referencedTableName: "companies",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("groups");
    const foreignKeyCompany = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_company") !== -1);
    await queryRunner.dropForeignKey("groups", foreignKeyCompany);
    await queryRunner.dropColumn("groups", "id_company");
    await queryRunner.dropTable("groups");
  }
}
