import { AuthenticateReponse, AuthenticateRequestDTO } from "../interfaces/authenticateDTO.interface";
import { BindUserWithCompanyDTO } from "../interfaces/bindUserWithCompanyDTO.interface";
import { UserDTO } from "../interfaces/userDTO.interface";

class UserServicesInterface {
  saveUser: (data: UserDTO) => Promise<void>;
  bindUserWithCompany: (data: BindUserWithCompanyDTO) => Promise<void>;
  authenticate: (data: AuthenticateRequestDTO) => Promise<AuthenticateReponse>;
}

export { UserServicesInterface };
