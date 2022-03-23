import { inject, injectable } from "tsyringe";
import { UpdateVacancyManagementInterface } from "../interfaces/updateVacancyManagement.interface";
import { IVacancyManagementRepository } from "../repositories/vacancyManagement.interface";
import { VacancyManagementServiceInterface } from "./vacancyManagement.service.interface";

@injectable()
class VacancyManagementService implements VacancyManagementServiceInterface {
  constructor(
    @inject("VacancyManagementRepository")
    private vacancyManagementRepository: IVacancyManagementRepository
  ) {}

  async updateVacancy(data: UpdateVacancyManagementInterface): Promise<void> {
    await this.vacancyManagementRepository.update(data);
  }
}

export { VacancyManagementService };
