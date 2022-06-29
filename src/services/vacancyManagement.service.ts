import dayjs from "dayjs";
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
import { formatDateAndHour, substractDate } from "../utils/DatesManipulation";
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
    const dateEnd = dayjs(new Date()).format(formatDateAndHour);

    const startTime = vacancyCheckIn.start_time;
    console.log("startTime", dayjs(startTime).format(formatDateAndHour));

    substractDate("29/06/2022 12:30:20", dateEnd);

    if (!vacancyCheckIn) {
      throw new ErrorCustom({
        message: "Vaga não encontrada",
        name: "DependecyNotFound",
      });
    }

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
