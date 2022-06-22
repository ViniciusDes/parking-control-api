import { getRepository, Repository } from "typeorm";
import { VacancyManagement } from "../entities/VacancyManagement";
import { CheckInDTO, VacancyManagementDTO } from "../interfaces/vacancyManagementDTO.interface";
import { IVacancyManagementRepository } from "./vacancyManagement.interface";

class VacancyManagementRepository implements IVacancyManagementRepository {
  private repository: Repository<VacancyManagement>;

  constructor() {
    this.repository = getRepository(VacancyManagement);
  }

  async update({
    category_id,
    start_time,
    end_time,
    value_hour,
    value_hour_additional,
    value_total,
    board,
    is_parked,
    description,
    vacancy_number,
  }): Promise<void> {
    const vacancy = this.repository.create({
      category_id,
      start_time,
      end_time,
      value_hour,
      value_hour_additional,
      value_total,
      board,
      is_parked,
      description,
      vacancy_number,
    });

    await this.repository.save(vacancy);
  }

  async checkIn({ category_id, start_time, board, description, vacancy_number, value_hour }): Promise<void> {
    const vacancy = this.repository.create({
      value_hour,
      category_id,
      start_time,
      board,
      description,
      vacancy_number,
      is_parked: 1,
    });

    await this.repository.save(vacancy);
  }

  async findVacancyByNumber(vacancy_number: number): Promise<VacancyManagement> {
    const vacancy = await this.repository.findOne({
      vacancy_number,
    });

    return vacancy;
  }
}

export { VacancyManagementRepository };
