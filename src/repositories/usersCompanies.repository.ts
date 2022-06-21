import { getRepository, Repository } from "typeorm";
import { UsersCompanies } from "../entities/UsersCompanies";
import { BindUserWithCompanyDTO } from "../interfaces/bindUserWithCompanyDTO.interface";
import { UsersCompaniesRepositoryInterface } from "./usersCompanies.repository.interface";

class UsersCompaniesReporitory implements UsersCompaniesRepositoryInterface {
  private repository: Repository<UsersCompanies>;

  constructor() {
    this.repository = getRepository(UsersCompanies);
  }

  async bindUserWithCompany(data: BindUserWithCompanyDTO) {
    const bindUser = this.repository.create(data);

    await this.repository.save(bindUser);
  }
}

export { UsersCompaniesReporitory };
