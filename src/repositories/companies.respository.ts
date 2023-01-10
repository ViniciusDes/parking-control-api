import { getRepository, Repository } from "typeorm";
import { Company } from "../entities/Company";
import { CompanyDTO } from "../interfaces/companyDTO.interface";
import { CompaniesRepositoryInterface } from "./companies.repository.interface";

class CompaniesRepository implements CompaniesRepositoryInterface {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }

  async save(data: CompanyDTO) {
    const company = this.repository.create(data);

    await this.repository.save(company);
  }

  async getCompanies(cpfCnpj?: string) {
    let companies = [];
    if (cpfCnpj) {
      companies = await this.repository.find({
        where: {
          cpf_cpnj: cpfCnpj,
        },
      });
    } else {
      companies = await this.repository.find();
    }

    return companies;
  }
}

export { CompaniesRepository };
