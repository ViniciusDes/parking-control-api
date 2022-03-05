import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateVacancyManagementInterface } from "../interfaces/updateVacancyManagement.interface";

class VacancyManagementController {
  async updateVacancy(req: Request, res: Response) {
    const dataToUpdateVacancyManagement: UpdateVacancyManagementInterface =
      req.body;

    const vacancyManagementService = container.resolve(CategoriesService);

    await vacancyManagementService.create(dataToUpdateVacancyManagement);
  }
}

export { VacancyManagementController };
