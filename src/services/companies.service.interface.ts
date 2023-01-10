import { Company } from "../entities/Company";
import { CompanyDTO } from "../interfaces/companyDTO.interface";

interface CompaniesServiceInterface {
  saveCompany: (data: CompanyDTO) => Promise<void>;
  getCompanies: () => Promise<Array<Company>>;
}

export { CompaniesServiceInterface };
