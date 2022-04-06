import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateGruoupUser1649204368016 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "group_user",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
        ],
      })
    );

    await queryRunner.addColumn(
      "group_user",
      new TableColumn({
        name: "id_user",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "group_user",
      new TableForeignKey({
        columnNames: ["id_user"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.addColumn(
      "group_user",
      new TableColumn({
        name: "id_group",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "group_user",
      new TableForeignKey({
        columnNames: ["id_group"],
        referencedColumnNames: ["id"],
        referencedTableName: "groups",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("group_user");
    const foreignKeyUser = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_user") !== -1);
    const foreignKeyGroup = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_group") !== -1);
    await queryRunner.dropForeignKey("group_user", foreignKeyUser);
    await queryRunner.dropForeignKey("group_user", foreignKeyGroup);
    await queryRunner.dropColumn("group_user", "id_group");
    await queryRunner.dropColumn("group_user", "id_permission");
    await queryRunner.dropTable("group_user");
  }
}
