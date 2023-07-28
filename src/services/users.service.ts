import { inject, injectable } from "tsyringe";
import * as Yup from "yup";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AuthenticateReponse, AuthenticateRequestDTO } from "../interfaces/authenticateDTO.interface";
import { BindUserWithCompanyDTO } from "../interfaces/bindUserWithCompanyDTO.interface";
import { UserDTO } from "../interfaces/userDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { UsersRepositoryInterface } from "../repositories/users.respository.interface";
import { UsersCompaniesRepositoryInterface } from "../repositories/usersCompanies.repository.interface";
import { UserServicesInterface } from "./users.service.interface";
import { User } from "../entities/User";

@injectable()
class UsersService implements UserServicesInterface {
  constructor(
    @inject("UsersRepository")
    private userRepository: UsersRepositoryInterface,
    @inject("UsersCompaniesReporitory")
    private usersCompaniesRepository: UsersCompaniesRepositoryInterface
  ) {}

  private errors = {};

  async verifyUserHasAlreadyExists(user: UserDTO): Promise<User> {
    const userExists = await this.userRepository.findUserByEmail(user.email);

    return userExists;
  }

  async saveUser(data: UserDTO): Promise<void> {
    try {
      const dataIsValid = await this.validateData(data);

      if (!dataIsValid) {
        throw new ErrorCustom({
          statusCode: 501,
          message: JSON.stringify(this.errors),
        });
      }

      if (data.password) {
        const passwordHash = await hash(data.password, 8);
        data.password = passwordHash;
      }

      await this.userRepository.save(data);
    } catch (e) {
      throw new ErrorCustom({
        statusCode: 500,
        message: e.message,
      });
    }
  }

  async getAll(name?: string): Promise<Array<User>> {
    const users = await this.userRepository.getAll(name);

    return users;
  }

  async getUserById(id: number): Promise<User> {
    const users = await this.userRepository.findUserById(id);
    console.log("users", users);

    return users;
  }

  async bindUserWithCompany(data: BindUserWithCompanyDTO) {
    try {
      await this.usersCompaniesRepository.bindUserWithCompany(data);
    } catch (e) {
      throw new ErrorCustom({
        statusCode: 500,
        message: e.message,
      });
    }
  }

  async authenticate({ email, password }: AuthenticateRequestDTO): Promise<AuthenticateReponse> {
    const user = await this.userRepository.findUserByEmail(email);
    console.log("userr", user);

    if (!user) {
      throw new ErrorCustom({ statusCode: 400, message: "Usuário ou senha inválidos" });
    }

    const passwordIsMatch = await compare(password, user.password);

    if (!passwordIsMatch) {
      throw new ErrorCustom({ statusCode: 400, message: "Usuário ou senha inválidos" });
    }

    const token = sign({}, "b634e9f488eabd0e19b16f43577eed43", { subject: String(user.id), expiresIn: "1d" });

    let userClone = Object.assign({}, user);
    delete userClone.password;

    const returnAuthenticate = {
      user: userClone,
      token,
    };

    return returnAuthenticate;
  }

  private async validateData(data: UserDTO): Promise<boolean> {
    const userAlredyExists = await this.verifyUserHasAlreadyExists(data);
    if (!data.id && userAlredyExists) {
      throw new ErrorCustom({
        statusCode: 501,
        message: "Usuário já cadastrado, verifique",
      });
    }

    try {
      await this.schemaValidate.validate(data, {
        abortEarly: false,
      });

      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        this.errors = validationErrors;
      } else {
      }
      return false;
    }
  }

  private schemaValidate = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório").max(250, "Máximo 250 caracteres, verifique"),
    cpf: Yup.string().max(11, "Máximo 11 caracteres, verifique"),
    email: Yup.string().required("O campo é obrigatório"),
  });
}

export { UsersService };
