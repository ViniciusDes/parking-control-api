import { UpdateVacancyManagementInterface } from "../interfaces/updateVacancyManagement.interface";

interface IVacancyManagementRepository {
  update: (data: UpdateVacancyManagementInterface) => Promise<void>;
}

export { IVacancyManagementRepository };
