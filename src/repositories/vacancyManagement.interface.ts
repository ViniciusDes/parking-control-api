import { VacancyManagement } from "../entities/VacancyManagement";
import { CheckInDTO, VacancyManagementDTO } from "../interfaces/vacancyManagementDTO.interface";

interface IVacancyManagementRepository {
  checkIn: (data: CheckInDTO) => Promise<void>;
  checkOut: (data: VacancyManagement) => Promise<VacancyManagement>;
  findVacancyByNumber: (vacancy_number: number) => Promise<VacancyManagement>;
  findVacancyById: (id: number) => Promise<VacancyManagement>;
}

export { IVacancyManagementRepository };
