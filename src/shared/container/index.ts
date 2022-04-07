import { container } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/categories.repository.interface";
import { CategoriesRepository } from "../../repositories/categories.repository";
import { IVacancyManagementRepository } from "../../repositories/vacancyManagement.interface";
import { VacancyManagementRepository } from "../../repositories/vacancyManagement.repository";
import { CompaniesRepository } from "../../repositories/companies.respository";
import { CompaniesRepositoryInterface } from "../../repositories/companies.repository.interface";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);

container.registerSingleton<IVacancyManagementRepository>("VacancyManagementRepository", VacancyManagementRepository);

container.registerSingleton<CompaniesRepositoryInterface>("CompaniesRepository", CompaniesRepository);
