import { Router } from "express";
import { CompaniesController } from "../controllers/companies.controller";

const companiesRoutes = Router();

const categoriesController = new CompaniesController();

companiesRoutes.post("/", categoriesController.createCompany);
companiesRoutes.get("/", categoriesController.getCompanies);

export { companiesRoutes };
