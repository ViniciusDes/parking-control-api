import { CreateCompany } from "../interfaces/createCompany.interface";

interface CompaniesServiceInterface {
  saveCompany: (data: CreateCompany) => Promise<void>;
}

export { CompaniesServiceInterface };
