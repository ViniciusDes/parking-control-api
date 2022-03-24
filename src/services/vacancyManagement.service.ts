import { container, inject, injectable } from "tsyringe";
import { UpdateVacancyManagementInterface } from "../interfaces/updateVacancyManagement.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { IVacancyManagementRepository } from "../repositories/vacancyManagement.interface";
import { CategoriesService } from "./categories.service";
import { VacancyManagementServiceInterface } from "./vacancyManagement.service.interface";

@injectable()
class VacancyManagementService implements VacancyManagementServiceInterface {
  constructor(
    @inject("VacancyManagementRepository")
    private vacancyManagementRepository: IVacancyManagementRepository
  ) {}

  async updateVacancy(data: UpdateVacancyManagementInterface): Promise<void> {
    const categoriesService = container.resolve(CategoriesService);

    try {
      const category = await categoriesService.findCategoryById(data.category_id);

      data.value_hour = category.value_hour;

      await this.vacancyManagementRepository.update(data);
    } catch (error) {
      throw new ErrorCustom({
        message: error.message,
        statusCode: 500,
      });
    }
  }
}

export { VacancyManagementService };
