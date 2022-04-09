import { VacancyManagementDTO } from "../interfaces/vacancyManagementDTO.interface";

interface VacancyManagementServiceInterface {
  updateVacancy: (data: VacancyManagementDTO) => Promise<void>;
}

export { VacancyManagementServiceInterface };
