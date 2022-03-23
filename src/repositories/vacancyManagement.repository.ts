import { getRepository, Repository } from "typeorm";
import { VacancyManagement } from "../entities/VacancyManagement";
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
}

export { VacancyManagementRepository };
