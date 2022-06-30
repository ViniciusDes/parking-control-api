import { VacancyManagement } from "../entities/VacancyManagement";
import { CheckInDTO, CheckOutDTO } from "../interfaces/vacancyManagementDTO.interface";

interface VacancyManagementServiceInterface {
  checkIn: (data: CheckInDTO) => Promise<void>;
  checkOut: (data: CheckOutDTO) => Promise<VacancyManagement>;
}

export { VacancyManagementServiceInterface };
