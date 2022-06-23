import {
  CalculationTimeSpentDTO,
  CalculatorTimeSpentInterface,
  CheckInDTO,
  CheckOutDTO,
  VacancyManagementDTO,
} from "../interfaces/vacancyManagementDTO.interface";

interface VacancyManagementServiceInterface {
  checkIn: (data: CheckInDTO) => Promise<void>;
  checkOut: (data: CheckOutDTO) => Promise<void>;
  calculateTimeSpent: (data: CalculationTimeSpentDTO) => CalculatorTimeSpentInterface;
}

export { VacancyManagementServiceInterface };
