import { inject, injectable } from "tsyringe";
import * as Yup from "yup";
import { PermissionsDTO } from "../interfaces/permissionsDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { PermissionsRepository } from "../repositories/permissions.repository";
import { PermissionsServicesInterface } from "./permissions.service.interface";

@injectable()
export class PermissionsService implements PermissionsServicesInterface {
  constructor(
    @inject("PermissionsRepository")
    private permissionsRepository: PermissionsRepository
  ) {}

  private errors = {};

  private schemaValidate = Yup.object().shape({
    id: Yup.number().min(1, "Mínimo 1 caracteres, verifique"),
    description: Yup.string().required("Campo obrigatório").max(250, "Máximo 250 caracteres, verifique"),
    situation: Yup.string().max(1, "Máximo 1 caractere, verifique"),
    id_company: Yup.number().required("Campo obrigatório"),
  });

  private async validateData(data: PermissionsDTO): Promise<boolean> {
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
      }
      return false;
    }
  }

  async save(data: PermissionsDTO): Promise<void> {
    const dataIsValid = await this.validateData(data);
    try {
      if (!dataIsValid) {
        throw new ErrorCustom({
          statusCode: 501,
          message: JSON.stringify(this.errors),
        });
      }
      await this.permissionsRepository.save(data);
    } catch (e) {
      throw new ErrorCustom({
        statusCode: e.statusCode ? e.statusCode : 500,
        message: e.message,
      });
    }
  }
}
