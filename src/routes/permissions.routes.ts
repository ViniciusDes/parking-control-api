import { Router } from "express";
import { PermissionsController } from "../controllers/permission.controller";

const permissionsRoutes = Router();
const permissionsController = new PermissionsController();

permissionsRoutes.post("/", permissionsController.createPermission);

export { permissionsRoutes };
