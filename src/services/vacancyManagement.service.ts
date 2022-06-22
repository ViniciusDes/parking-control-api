import { container, inject, injectable } from "tsyringe";
import { CheckInDTO, VacancyManagementDTO } from "../interfaces/vacancyManagementDTO.interface";
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

  async updateVacancy(data: VacancyManagementDTO): Promise<void> {
    const categoriesService = container.resolve(CategoriesService);

    try {
      //     ategory_id: number;
      // start_time: number;
      // end_time?: number;
      // value_hour: number;
      // value_hour_additional: number;
      // value_total: number;
      // board?: number;
      // is_parked: number;
      // description?: number;
      // vacancy_number: number;
      const category = await categoriesService.findCategoryById(data.category_id);

      data.value_hour = category.value_hour;
      data.value_hour_additional = category.value_additional;
      data.category_id = category.id;

      await this.vacancyManagementRepository.update(data);
    } catch (error) {
      throw new ErrorCustom({
        message: error.message,
        statusCode: 500,
      });
    }
  }

  async verifyIfHaveAlreadyCheckIn(vacancy_number: number): Promise<boolean> {
    const vacancyChecked = await this.vacancyManagementRepository.findVacancyByNumber(vacancy_number);

    return vacancyChecked ? true : false;
  }

  async checkIn(data: CheckInDTO): Promise<void> {
    const categoriesService = container.resolve(CategoriesService);

    try {
      // ategory_id: number;
      // start_time: number;
      // end_time?: number;
      // value_hour: number;
      // value_hour_additional: number;
      // value_total: number;
      // board?: number;
      // is_parked: number;
      // description?: number;
      // vacancy_number: number;
      const category = await categoriesService.findCategoryById(data.category_id);

      if (!category) {
        throw new ErrorCustom({
          message: "Categoria não encontrada",
          statusCode: 400,
        });
      }

      const vacancyHasBeenChecked = await this.verifyIfHaveAlreadyCheckIn(data.vacancy_number);
      if (vacancyHasBeenChecked) {
        console.log("vai parar aq");
        throw new Error("NonExistentPartnerError");
        throw new ErrorCustom({
          message: "Ja possui checkin para essa vaga",
          statusCode: 403,
        });
      }

      const checkInObject = Object.assign(
        {},
        {
          ...data,
          category_id: category.id,
          value_hour: category.value_hour,
        }
      );

      await this.vacancyManagementRepository.checkIn(checkInObject);
    } catch (error) {
      throw new ErrorCustom({
        message: error.message,
        statusCode: 500,
      });
    }
  }
}

export { VacancyManagementService };
