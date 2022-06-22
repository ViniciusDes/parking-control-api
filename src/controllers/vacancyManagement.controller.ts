import { Request, Response } from "express";
import { container } from "tsyringe";
import { CheckInDTO, VacancyManagementDTO } from "../interfaces/vacancyManagementDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { VacancyManagementService } from "../services/vacancyManagement.service";

class VacancyManagementController {
  async updateVacancy(req: Request, res: Response): Promise<Response> {
    const dataToUpdateVacancyManagement: VacancyManagementDTO = req.body;

    const vacancyManagementService = container.resolve(VacancyManagementService);

    await vacancyManagementService.updateVacancy(dataToUpdateVacancyManagement);

    return res.status(201).send({
      success: true,
      message: "Vaga atualizada com sucesso",
    });
  }

  async checkIn(req: Request, res: Response): Promise<Response> {
    const dataToUpdateVacancyManagement: CheckInDTO = req.body;

    const vacancyManagementService = container.resolve(VacancyManagementService);

    try {
      await vacancyManagementService.checkIn(dataToUpdateVacancyManagement);

      return res.status(201).send({
        success: true,
        message: "Vaga atualizada com sucesso",
      });
    } catch (error) {
      console.log(error);
      console.log("errrrrorrrr", Object.keys(error));
      // return error;
      // throw new ErrorCustom({ statusCode: 402, message: "teste" });
    }
  }
}

export { VacancyManagementController };
