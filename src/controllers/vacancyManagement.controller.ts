import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateVacancyManagementInterface } from "../interfaces/updateVacancyManagement.interface";
import { VacancyManagementService } from "../services/vacancyManagement.service";

class VacancyManagementController {
  async updateVacancy(req: Request, res: Response) {
    const dataToUpdateVacancyManagement: UpdateVacancyManagementInterface = req.body;

    const vacancyManagementService = container.resolve(VacancyManagementService);

    await vacancyManagementService.updateVacancy(dataToUpdateVacancyManagement);

    return res.status(201).send({
      success: true,
      message: "Vaga atualizada com sucesso",
    });
  }
}

export { VacancyManagementController };
