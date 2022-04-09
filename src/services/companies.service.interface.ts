import { CompanyDTO } from "../interfaces/companyDTO.interface";

interface CompaniesServiceInterface {
  saveCompany: (data: CompanyDTO) => Promise<void>;
}

export { CompaniesServiceInterface };
