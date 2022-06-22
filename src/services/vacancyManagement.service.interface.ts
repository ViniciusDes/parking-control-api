import { CheckInDTO, VacancyManagementDTO } from "../interfaces/vacancyManagementDTO.interface";

interface VacancyManagementServiceInterface {
  updateVacancy: (data: VacancyManagementDTO) => Promise<void>;
  checkIn: (data: CheckInDTO) => Promise<void>;
}

export { VacancyManagementServiceInterface };
