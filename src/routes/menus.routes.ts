import { Router } from "express";
import { MenuController } from "../controllers/menus.controler";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const menusRoutes = Router();

const menuController = new MenuController();

menusRoutes.post("/", ensureAuthenticated, menuController.save);

export { menusRoutes };
