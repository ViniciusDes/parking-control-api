import { inject, injectable } from "tsyringe";
import { UserDTO } from "../interfaces/userDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { UsersRepositoryInterface } from "../repositories/users.respository.interface";
import { UserServicesInterface } from "./users.service.interface";

@injectable()
class UsersService implements UserServicesInterface {
  constructor(
    @inject("UsersRepository")
    private userRepository: UsersRepositoryInterface
  ) {}

  async verifyUserHasAlreadyExists(user: UserDTO) {
    const userExists = await this.userRepository.findUserByCpfOrEmail(user);
    console.log("userExists", userExists);
    return userExists;
  }

  async findUserByCpf() {}

  async saveUser(data: UserDTO) {
    try {
      const userAlredyExists = await this.verifyUserHasAlreadyExists(data);
      if (userAlredyExists) {
        throw new ErrorCustom({
          statusCode: 501,
          message: "Usuário já existe, verifique",
        });
        return;
      }

      await this.userRepository.save(data);
    } catch (e) {
      throw new ErrorCustom({
        statusCode: 500,
        message: e.message,
      });
    }
  }
}

export { UsersService };
