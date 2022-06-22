import { User } from "../entities/User";
import { UserDTO } from "../interfaces/userDTO.interface";

interface UsersRepositoryInterface {
  save: (data: UserDTO) => Promise<void>;
  findUserByEmail: (email: string) => Promise<User>;
  findUserById: (id: number) => Promise<User>;
}

export { UsersRepositoryInterface };
