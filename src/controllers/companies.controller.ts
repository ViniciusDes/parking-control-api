import { Request, Response } from "express";
import { container } from "tsyringe";
import { CompanyDTO } from "../interfaces/companyDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { CompaniesService } from "../services/companies.service";

class CompaniesController {
  async createCompany(req: Request, res: Response): Promise<Response> {
    const data: CompanyDTO = req.body;

    const companyService = container.resolve(CompaniesService);

    try {
      await companyService.saveCompany(data);

      return res.status(201).send({
        success: true,
        message: "Empresa salva com sucesso",
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }
}

export { CompaniesController };
