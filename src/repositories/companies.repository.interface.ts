import { Company } from "../entities/Company";
import { CompanyDTO } from "../interfaces/companyDTO.interface";

interface CompaniesRepositoryInterface {
  save: (data: CompanyDTO) => Promise<void>;
  getCompanies: () => Promise<Array<Company>>;
}

export { CompaniesRepositoryInterface };
