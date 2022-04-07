import { getRepository, Repository } from "typeorm";
import { Company } from "../entities/Company";
import { CreateCompany } from "../interfaces/createCompany.interface";
import { CompaniesRepositoryInterface } from "./companies.repository.interface";

class CompaniesRepository implements CompaniesRepositoryInterface {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }

  async save(data: CreateCompany) {
    const company = this.repository.create(data);

    await this.repository.save(company);
  }
}

export { CompaniesRepository };
