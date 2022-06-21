import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateGroupPermission1649202424971 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "groups_permissions",
        columns: [],
      })
    );

    await queryRunner.addColumn(
      "groups_permissions",
      new TableColumn({
        name: "id_permission",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "groups_permissions",
      new TableForeignKey({
        columnNames: ["id_permission"],
        referencedColumnNames: ["id"],
        referencedTableName: "permissions",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.addColumn(
      "groups_permissions",
      new TableColumn({
        name: "id_group",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "groups_permissions",
      new TableForeignKey({
        columnNames: ["id_group"],
        referencedColumnNames: ["id"],
        referencedTableName: "groups",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("groups_permissions");
    const foreignKeyPermission = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_permission") !== -1);
    const foreignKeyGroup = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_group") !== -1);
    await queryRunner.dropForeignKey("groups_permissions", foreignKeyPermission);
    await queryRunner.dropForeignKey("groups_permissions", foreignKeyGroup);
    await queryRunner.dropColumn("groups_permissions", "id_group");
    await queryRunner.dropColumn("groups_permissions", "id_permission");
    await queryRunner.dropTable("groups_permissions");
  }
}
