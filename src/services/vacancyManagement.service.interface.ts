import { UpdateVacancyManagementInterface } from "../interfaces/updateVacancyManagement.interface";

interface VacancyManagementServiceInterface {
  updateVacancy: (data: UpdateVacancyManagementInterface) => Promise<void>;
}

export { VacancyManagementServiceInterface };
