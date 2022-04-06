import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateGroupPermission1649202424971 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "group_permission",
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
      "group_permission",
      new TableColumn({
        name: "id_permission",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "group_permission",
      new TableForeignKey({
        columnNames: ["id_permission"],
        referencedColumnNames: ["id"],
        referencedTableName: "permissions",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.addColumn(
      "group_permission",
      new TableColumn({
        name: "id_group",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "group_permission",
      new TableForeignKey({
        columnNames: ["id_group"],
        referencedColumnNames: ["id"],
        referencedTableName: "groups",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("group_permission");
    const foreignKeyPermission = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_permission") !== -1);
    const foreignKeyGroup = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_group") !== -1);
    await queryRunner.dropForeignKey("group_permission", foreignKeyPermission);
    await queryRunner.dropForeignKey("group_permission", foreignKeyGroup);
    await queryRunner.dropColumn("group_permission", "id_group");
    await queryRunner.dropColumn("group_permission", "id_permission");
    await queryRunner.dropTable("group_permission");
  }
}
