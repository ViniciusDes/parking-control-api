import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserDTO } from "../interfaces/userDTO.interface";
import { UsersRepositoryInterface } from "./users.respository.interface";

class UsersRepository implements UsersRepositoryInterface {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async save(data: UserDTO) {
    const user = this.repository.create(data);

    await this.repository.save(user);
  }

  async findUserByCpfOrEmail(user_: UserDTO) {
    const user = await this.repository
      .createQueryBuilder()
      .where(`email = :email OR cpf = :cpf and cpf !=  ${null} and email != ${null}`, {
        email: user_.email,
        cpf: user_.cpf,
      })
      .getOne();

    return user;
  }
}

export { UsersRepository };
