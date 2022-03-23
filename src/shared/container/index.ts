import { container } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/categories.repository.interface";
import { CategoriesRepository } from "../../repositories/categories.repository";
import { IVacancyManagementRepository } from "../../repositories/vacancyManagement.interface";
import { VacancyManagementRepository } from "../../repositories/vacancyManagement.repository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);

container.registerSingleton<IVacancyManagementRepository>("VacancyManagementRepository", VacancyManagementRepository);
