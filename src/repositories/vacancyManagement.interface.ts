import { VacancyManagementDTO } from "../interfaces/vacancyManagementDTO.interface";

interface IVacancyManagementRepository {
  update: (data: VacancyManagementDTO) => Promise<void>;
}

export { IVacancyManagementRepository };
