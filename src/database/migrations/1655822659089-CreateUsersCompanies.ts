import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersCompanies1655822659089 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_companies",
        columns: [
          {
            name: "id_user",
            type: "int",
            isNullable: false,
          },
          {
            name: "id_company",
            type: "int",
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "users_companies",
      new TableForeignKey({
        columnNames: ["id_company"],
        referencedColumnNames: ["id"],
        referencedTableName: "companies",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "users_companies",
      new TableForeignKey({
        columnNames: ["id_user"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const tableUsersCompanies = await queryRunner.getTable("users_companies");
    const foreignKeyUsers = tableUsersCompanies.foreignKeys.find((fk) => fk.columnNames.indexOf("id_user") !== -1);
    const foreignKeyCompany = tableUsersCompanies.foreignKeys.find((fk) => fk.columnNames.indexOf("id_company") !== -1);
    await queryRunner.dropForeignKey("users_companies", foreignKeyUsers);
    await queryRunner.dropForeignKey("users_companies", foreignKeyCompany);
    await queryRunner.dropTable("users_companies");
  }
}
