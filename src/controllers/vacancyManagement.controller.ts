import { Request, Response } from "express";
import { container } from "tsyringe";
import { CheckInDTO, CheckOutDTO, VacancyManagementDTO } from "../interfaces/vacancyManagementDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { VacancyManagementService } from "../services/vacancyManagement.service";

class VacancyManagementController {
  async checkIn(req: Request, res: Response): Promise<Response> {
    const dataToUpdateVacancyManagement: CheckInDTO = req.body;

    const vacancyManagementService = container.resolve(VacancyManagementService);

    await vacancyManagementService.checkIn(dataToUpdateVacancyManagement);

    return res.status(201).send({
      success: true,
      message: "Vaga atualizada com sucesso",
    });
  }

  async checkOut(req: Request, res: Response): Promise<Response> {
    const dataToUpdateVacancyManagement: CheckOutDTO = req.body;

    const vacancyManagementService = container.resolve(VacancyManagementService);

    await vacancyManagementService.checkOut(dataToUpdateVacancyManagement);

    return res.status(201).send({
      success: true,
      message: "Vaga atualizada com sucesso",
    });
  }
}

export { VacancyManagementController };
