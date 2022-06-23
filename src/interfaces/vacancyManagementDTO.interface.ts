interface VacancyManagementDTO {
  id?: number;
  category_id: number;
  start_time: number;
  end_time?: number;
  value_hour: number;
  value_hour_additional: number;
  value_total: number;
  board?: number;
  is_parked: number;
  description?: number;
  vacancy_number: number;
}

interface CheckInDTO {
  category_id: number;
  start_time: number;
  value_hour?: number;
  board?: number;
  description?: number;
  vacancy_number: number;
}

interface CheckOutDTO {
  id: number;
}

interface CalculatorTimeSpentInterface {
  valueTotal: number;
  valueAdditional: number | null;
  timeSpent: string;
}

interface CalculationTimeSpentDTO {
  startTime: string;
  valueHourCategory: number;
  valueAdditionalCategory: number;
}

export { VacancyManagementDTO, CheckInDTO, CheckOutDTO, CalculatorTimeSpentInterface, CalculationTimeSpentDTO };
