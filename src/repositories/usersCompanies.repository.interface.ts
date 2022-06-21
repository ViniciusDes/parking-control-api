import { BindUserWithCompanyDTO } from "../interfaces/bindUserWithCompanyDTO.interface";

interface UsersCompaniesRepositoryInterface {
  bindUserWithCompany: (data: BindUserWithCompanyDTO) => Promise<void>;
}

export { UsersCompaniesRepositoryInterface };
