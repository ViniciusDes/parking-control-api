import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { vacancyManagementRoutes } from "./vacancyManegement.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);

routes.use("/vacancyManagement", vacancyManagementRoutes);

export { routes };
