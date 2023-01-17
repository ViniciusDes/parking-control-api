import { Router } from "express";
import { CompaniesController } from "../controllers/companies.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const companiesRoutes = Router();

const categoriesController = new CompaniesController();

companiesRoutes.post("/", ensureAuthenticated, categoriesController.createCompany);
companiesRoutes.get("/", ensureAuthenticated, categoriesController.getCompanies);

export { companiesRoutes };
