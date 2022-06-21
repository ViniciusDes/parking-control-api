import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class UsersPermissions1648684747997 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_permissions",
        columns: [],
      })
    );

    await queryRunner.addColumn(
      "users_permissions",
      new TableColumn({
        name: "id_user",
        type: "int",
      })
    );

    await queryRunner.addColumn(
      "users_permissions",
      new TableColumn({
        name: "id_permission",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "users_permissions",
      new TableForeignKey({
        columnNames: ["id_user"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "users_permissions",
      new TableForeignKey({
        columnNames: ["id_permission"],
        referencedColumnNames: ["id"],
        referencedTableName: "permissions",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("users_permissions");
    const foreignKeyUser = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_user") !== -1);
    const foreignKeyPermission = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_permission") !== -1);
    await queryRunner.dropForeignKey("users_permissions", foreignKeyUser);
    await queryRunner.dropForeignKey("users_permissions", foreignKeyPermission);
    await queryRunner.dropColumn("users_permissions", "id_user");
    await queryRunner.dropColumn("users_permissions", "id_permission");
    await queryRunner.dropTable("users_permissions");
  }
}
