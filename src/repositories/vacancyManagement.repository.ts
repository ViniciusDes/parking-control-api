import { getRepository, Repository } from "typeorm";
import { VacancyManagement } from "../entities/VacancyManagement";
import { IVacancyManagementRepository } from "./vacancyManagement.interface";

class VacancyManagementRepository implements IVacancyManagementRepository {
  private repository: Repository<VacancyManagement>;

  constructor() {
    this.repository = getRepository(VacancyManagement);
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

  async checkOut(data: VacancyManagement): Promise<VacancyManagement> {
    await this.repository.save({
      ...data,
      is_parked: 2,
    });

    return data;
  }

  async findVacancyByNumber(vacancy_number: number): Promise<VacancyManagement> {
    const vacancy = await this.repository.findOne({
      vacancy_number,
    });

    return vacancy;
  }

  async findVacancyById(id: number): Promise<VacancyManagement> {
    const vacancy = await this.repository.findOne(id);

    return vacancy;
  }
}

export { VacancyManagementRepository };
