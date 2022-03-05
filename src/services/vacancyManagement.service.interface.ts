import { UpdateVacancyManagementInterface } from "../interfaces/updateVacancyManagement.interface";

interface VacancyManagementService {
  updateVacancy: (data: UpdateVacancyManagementInterface) => Promise<void>;
}

export { VacancyManagementService };
