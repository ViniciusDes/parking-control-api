import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateGruoupUser1649204368016 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "groups_users",
        columns: [],
      })
    );

    await queryRunner.addColumn(
      "groups_users",
      new TableColumn({
        name: "id_user",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "groups_users",
      new TableForeignKey({
        columnNames: ["id_user"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.addColumn(
      "groups_users",
      new TableColumn({
        name: "id_group",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "groups_users",
      new TableForeignKey({
        columnNames: ["id_group"],
        referencedColumnNames: ["id"],
        referencedTableName: "groups",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("groups_users");
    const foreignKeyUser = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_user") !== -1);
    const foreignKeyGroup = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_group") !== -1);
    await queryRunner.dropForeignKey("groups_users", foreignKeyUser);
    await queryRunner.dropForeignKey("groups_users", foreignKeyGroup);
    await queryRunner.dropColumn("groups_users", "id_group");
    await queryRunner.dropColumn("groups_users", "id_permission");
    await queryRunner.dropTable("groups_users");
  }
}
