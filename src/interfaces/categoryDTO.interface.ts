import { Company } from "../entities/Company";

interface CategoryDTO {
  description: string;
  value_hour: number;
  value_additional: number;
  id_company: number;
}

export { CategoryDTO };
