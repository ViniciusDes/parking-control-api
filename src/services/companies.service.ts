import { inject, injectable } from "tsyringe";
import * as Yup from "yup";
import { CompanyDTO } from "../interfaces/companyDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { CompaniesRepositoryInterface } from "../repositories/companies.repository.interface";
import { CompaniesServiceInterface } from "./companies.service.interface";

@injectable()
class CompaniesService implements CompaniesServiceInterface {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: CompaniesRepositoryInterface
  ) {}
  private errors = {};

  private async validateData(data: CompanyDTO) {
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
    id: Yup.number(),
    cod_company: Yup.string().required("Campo obrigatório").max(4, "Máximo 4 caracteres, verifique"),
    cpf_cpnj: Yup.string().max(14, "Máximo 14 caracteres, verifique").required("Campo obrigatório"),
    address_zip_code: Yup.string().required("Campo obrigatório").max(8, "Máximo 8 caracteres, verifique"),
    corporate_name: Yup.string().required("Campo obrigatório").max(250, "Máximo 250 caracteres, verifique"),
    fantasy_name: Yup.string().required("Campo obrigatório").max(250, "Máximo 250 caracteres, verifique"),
    situation: Yup.string().when("id", {
      is: (id: number) => id && id,
      then: (schema) => schema.required("O campo é obrigatórsssssio").max(1, "Valor inválido"),
    }),
  });

  async saveCompany(data: CompanyDTO) {
    try {
      const dataIsValid = await this.validateData(data);

      if (!dataIsValid) {
        throw new ErrorCustom({
          statusCode: 500,
          message: JSON.stringify(this.errors),
        });
      }
      await this.companiesRepository.save(data);
    } catch (e) {
      throw new ErrorCustom({
        statusCode: 500,
        message: e.message,
      });
    }
  }
}

export { CompaniesService };