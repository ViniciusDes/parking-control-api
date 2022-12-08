import dayjs from "dayjs";
import { container, inject, injectable } from "tsyringe";
import { VacancyManagement } from "../entities/VacancyManagement";
import { CheckInDTO, CheckOutDTO } from "../interfaces/vacancyManagementDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { IVacancyManagementRepository } from "../repositories/vacancyManagement.interface";
import { formatDateAndHour, substractTime } from "../utils/DatesManipulation";
import { CategoriesService } from "./categories.service";
import { VacancyManagementServiceInterface } from "./vacancyManagement.service.interface";

@injectable()
class VacancyManagementService implements VacancyManagementServiceInterface {
  constructor(
    @inject("VacancyManagementRepository")
    private vacancyManagementRepository: IVacancyManagementRepository
  ) {}

  async verifyIfHaveAlreadyCheckIn(vacancy_number: number): Promise<boolean> {
    const vacancyChecked = await this.vacancyManagementRepository.findVacancyByNumberIsParked(vacancy_number);
    return vacancyChecked ? (vacancyChecked.is_parked === 1 ? true : false) : false;
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

  async checkOut(data: CheckOutDTO): Promise<VacancyManagement> {
    const categoriesService = container.resolve(CategoriesService);
    const vacancyCheckIn = await this.vacancyManagementRepository.findVacancyById(data.id);

    if (!vacancyCheckIn) {
      throw new ErrorCustom({
        message: "Vaga não encontrada",
        name: "DependecyNotFound",
      });
    }

    if (vacancyCheckIn.is_parked === 2) {
      throw new ErrorCustom({
        message: "Já houve checkout para devida vaga, verifique",
        name: "DependecyNotFound",
      });
    }

    const category = await categoriesService.findCategoryById(vacancyCheckIn.category_id);

    if (!category) {
      throw new ErrorCustom({
        message: "Categoria não encontrada",
        name: "DependecyNotFound",
      });
    }

    const timeEnd = dayjs(new Date()).format(formatDateAndHour);
    const startTime = vacancyCheckIn.start_time;
    const timeSpent = substractTime(startTime, timeEnd);

    const valueTotal = timeSpent * category.value_hour;

    const vacancyToSave = {
      ...vacancyCheckIn,
      end_time: timeEnd,
      value_total: valueTotal,
    };

    return await this.vacancyManagementRepository.checkOut(vacancyToSave);
  }
}

export { VacancyManagementService };
