import { inject, injectable } from "tsyringe";
import * as Yup from "yup";
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

  private errors = {};

  async verifyUserHasAlreadyExists(user: UserDTO) {
    const userExists = await this.userRepository.findUserByCpfOrEmail(user);

    return userExists;
  }

  private async validateData(data: UserDTO) {
    const userAlredyExists = await this.verifyUserHasAlreadyExists(data);
    if (userAlredyExists) {
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
    id_company: Yup.number().required("Campo obrigatório"),
    cpf: Yup.string().max(11, "Máximo 11 caracteres, verifique"),
    email: Yup.string().required("O campo é obrigatório"),
  });

  async saveUser(data: UserDTO) {
    try {
      const dataIsValid = await this.validateData(data);
      console.log(dataIsValid);
      if (!dataIsValid) {
        throw new ErrorCustom({
          statusCode: 501,
          message: JSON.stringify(this.errors),
        });
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
