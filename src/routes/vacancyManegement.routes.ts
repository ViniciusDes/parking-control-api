import { Router } from "express";
import { VacancyManagementController } from "../controllers/vacancyManagement.controller";

const vacancyManagementRoutes = Router();

const vacancyManagementController = new VacancyManagementController();

vacancyManagementRoutes.post("/checkIn", vacancyManagementController.checkIn);

vacancyManagementRoutes.post("/checkOut", vacancyManagementController.checkOut);

export { vacancyManagementRoutes };
