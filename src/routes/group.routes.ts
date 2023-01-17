import { Router } from "express";
import { GroupController } from "../controllers/group.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
const groupRoutes = Router();

const categoriesController = new GroupController();

groupRoutes.post("/", ensureAuthenticated, categoriesController.saveGroup);

export { groupRoutes };
