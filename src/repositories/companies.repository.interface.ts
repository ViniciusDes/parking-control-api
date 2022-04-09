import { CompanyDTO } from "../interfaces/companyDTO.interface";

interface CompaniesRepositoryInterface {
  save: (data: CompanyDTO) => Promise<void>;
}

export { CompaniesRepositoryInterface };
