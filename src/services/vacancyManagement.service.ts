import { inject, injectable } from "tsyringe";
import { UpdateVacancyManagementInterface } from "../interfaces/updateVacancyManagement.interface";
import { ICategoriesRepository } from "../repositories/categories.repository.interface";
import { ICategoriesService } from "./categories.service.interface";
import { VacancyManagementServiceInterface } from "./vacancyManagement.service.interface";

@injectable()
class VacancyManagementService implements VacancyManagementServiceInterface {
  constructor(
    @inject("VacancyManagementRepository")
    private vacancyManagementRepository: ICategoriesRepository
  ) {}

  async updateVacancy(data: UpdateVacancyManagementInterface): Promise<void> {
    await this.vacancyManagementRepository.save(data);
  }
}

export { VacancyManagementService };
