import { container, inject, injectable } from "tsyringe";
import {
  CalculationTimeSpentDTO,
  CalculatorTimeSpentInterface,
  CheckInDTO,
  CheckOutDTO,
  VacancyManagementDTO,
} from "../interfaces/vacancyManagementDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { IVacancyManagementRepository } from "../repositories/vacancyManagement.interface";
import { substractDate } from "../utils/DatesManipulation";
import { CategoriesService } from "./categories.service";
import { VacancyManagementServiceInterface } from "./vacancyManagement.service.interface";

@injectable()
class VacancyManagementService implements VacancyManagementServiceInterface {
  constructor(
    @inject("VacancyManagementRepository")
    private vacancyManagementRepository: IVacancyManagementRepository
  ) {}

  async verifyIfHaveAlreadyCheckIn(vacancy_number: number): Promise<boolean> {
    const vacancyChecked = await this.vacancyManagementRepository.findVacancyByNumber(vacancy_number);

    return vacancyChecked ? (vacancyChecked.is_parked ? true : false) : false;
  }

  async checkIn(data: CheckInDTO): Promise<void> {
    const categoriesService = container.resolve(CategoriesService);

    const category = await categoriesService.findCategoryById(data.category_id);

    if (!category) {
      throw new ErrorCustom({
        statusCode: 405,
        message: "Categoria não encontrada",
        name: "DependecyNotFound",
      });
    }

    const vacancyHasBeenChecked = await this.verifyIfHaveAlreadyCheckIn(data.vacancy_number);
    if (vacancyHasBeenChecked) {
      throw new ErrorCustom({
        statusCode: 405,
        message: "O checkin para esta vaga ja foi feito",
        name: "ServiceHasAlreadyStarted",
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
  }

  async checkOut(data: CheckOutDTO): Promise<void> {
    const categoriesService = container.resolve(CategoriesService);
    const vacancyCheckIn = await this.vacancyManagementRepository.findVacancyById(data.id);

    if (!vacancyCheckIn) {
      throw new ErrorCustom({
        message: "Vaga não encontrada",
        name: "DependecyNotFound",
      });
    }

    console.log(substractDate(new Date(), new Date()));
    // console.log(substractDate(new Date("2022-06-23 14:20:44"), new Date()));

    // const category = await categoriesService.findCategoryById(vacancy.category_id);

    // if (!category) {
    //   throw new ErrorCustom({
    //     message: "Categoria não encontrada",
    //     name: "DependecyNotFound",
    //   });
    // }

    // const vacancyHasBeenChecked = await this.verifyIfHaveAlreadyCheckIn(data.vacancy_number);
    // if (vacancyHasBeenChecked) {
    //   throw new ErrorCustom({
    //     statusCode: 405,
    //     message: "O checkin para esta vaga ja foi feito",
    //     name: "ServiceHasAlreadyStarted",
    //   });
    // }

    // const checkInObject = Object.assign(
    //   {},
    //   {
    //     ...data,
    //     category_id: category.id,
    //     value_hour: category.value_hour,
    //   }
    // );

    // await this.vacancyManagementRepository.checkIn(checkInObject);
  }

  calculateTimeSpent(data: CalculationTimeSpentDTO): CalculatorTimeSpentInterface {
    const timeSpent = data.startTime;

    return {
      valueTotal: 1,
      valueAdditional: 1,
      timeSpent: "ss",
    };
  }
}

export { VacancyManagementService };
