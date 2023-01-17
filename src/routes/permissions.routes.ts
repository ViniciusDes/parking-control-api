import { Router } from "express";
import { PermissionsController } from "../controllers/permission.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const permissionsRoutes = Router();
const permissionsController = new PermissionsController();

permissionsRoutes.get("/", ensureAuthenticated, permissionsController.getPermissions);
permissionsRoutes.post("/", ensureAuthenticated, permissionsController.createPermission);

export { permissionsRoutes };
