import { User } from "../entities/User";
import { UserDTO } from "../interfaces/userDTO.interface";

interface UsersRepositoryInterface {
  save: (data: UserDTO) => Promise<void>;
  findUserByCpfOrEmail: (data: UserDTO) => Promise<User>;
}

export { UsersRepositoryInterface };
