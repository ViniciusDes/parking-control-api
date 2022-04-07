import { container, inject, injectable } from "tsyringe";
import { CreateCompany } from "../interfaces/createCompany.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { CompaniesRepositoryInterface } from "../repositories/companies.repository.interface";
import { CompaniesServiceInterface } from "./companies.service.interface";

@injectable()
class CompaniesService implements CompaniesServiceInterface {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: CompaniesRepositoryInterface
  ) {}

  async saveCompany(data: CreateCompany) {
    try {
      await this.companiesRepository.save(data);
    } catch (e) {
      throw new ErrorCustom({
        statusCode: 500,
        message: e.message,
      });
    }
  }
}

export { CompaniesService };
