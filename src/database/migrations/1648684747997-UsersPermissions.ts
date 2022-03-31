import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class UsersPermissions1648684747997 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_permissions",
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
      "users_permissions",
      new TableColumn({
        name: "id_user",
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("users_permissions");
    const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf("id_user") !== -1);
    await queryRunner.dropForeignKey("users_permissions", foreignKey);
    await queryRunner.dropColumn("users_permissions", "id_user");
    await queryRunner.dropTable("users_permissions");
  }
}
