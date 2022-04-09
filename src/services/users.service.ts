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

  async saveUser(data: UserDTO) {
    try {
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
