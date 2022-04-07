import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { companiesRoutes } from "./companies.routes";
import { vacancyManagementRoutes } from "./vacancyManegement.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);

routes.use("/vacancyManagement", vacancyManagementRoutes);

routes.use("/companies", companiesRoutes);

export { routes };
