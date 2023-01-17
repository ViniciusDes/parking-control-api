import { User } from "../entities/User";
import { AuthenticateReponse, AuthenticateRequestDTO } from "../interfaces/authenticateDTO.interface";
import { BindUserWithCompanyDTO } from "../interfaces/bindUserWithCompanyDTO.interface";
import { UserDTO } from "../interfaces/userDTO.interface";

class UserServicesInterface {
  saveUser: (data: UserDTO) => Promise<void>;
  getAll: (name?: string) => Promise<Array<User>>;
  bindUserWithCompany: (data: BindUserWithCompanyDTO) => Promise<void>;
  authenticate: (data: AuthenticateRequestDTO) => Promise<AuthenticateReponse>;
}

export { UserServicesInterface };
