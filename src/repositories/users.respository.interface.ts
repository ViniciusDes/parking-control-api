import { UserDTO } from "../interfaces/userDTO.interface";

interface UsersRepositoryInterface {
  save: (data: UserDTO) => Promise<void>;
}

export { UsersRepositoryInterface };
