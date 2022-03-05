interface UpdateVacancyManagementInterface {
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

export { UpdateVacancyManagementInterface };
