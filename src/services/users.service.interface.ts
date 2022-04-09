import { UserDTO } from "../interfaces/userDTO.interface";

class UserServicesInterface {
  saveUser: (data: UserDTO) => Promise<void>;
}

export { UserServicesInterface };
