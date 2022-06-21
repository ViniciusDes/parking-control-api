import { Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Company } from "./Company";
import { User } from "./User";

@Entity("users_companies")
class UsersCompanies {
  @PrimaryColumn()
  @ManyToMany(() => User, (user) => user.id)
  id_user: number;

  @PrimaryColumn()
  @ManyToMany(() => Company, (company) => company.id)
  id_company: number;
}

export { UsersCompanies };
