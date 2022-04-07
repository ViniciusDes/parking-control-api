import { CreateCompany } from "../interfaces/createCompany.interface";

interface CompaniesRepositoryInterface {
  save: (data: CreateCompany) => Promise<void>;
}

export { CompaniesRepositoryInterface };
