import { VacancyManagement } from "../entities/VacancyManagement";
import { CheckInDTO, VacancyManagementDTO } from "../interfaces/vacancyManagementDTO.interface";

interface IVacancyManagementRepository {
  update: (data: VacancyManagementDTO) => Promise<void>;
  checkIn: (data: CheckInDTO) => Promise<void>;
  findVacancyByNumber: (vacancy_number: number) => Promise<VacancyManagement>;
  findVacancyById: (id: number) => Promise<VacancyManagement>;
}

export { IVacancyManagementRepository };
