import { Router } from "express";
import { GroupController } from "../controllers/group.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
const groupRoutes = Router();

const groupController = new GroupController();

groupRoutes.post("/", ensureAuthenticated, groupController.saveGroup);
groupRoutes.get("/", ensureAuthenticated, groupController.getAllGroups);

groupRoutes.post("/bindPermissions", ensureAuthenticated, groupController.bindGroupWithPermission);
groupRoutes.get("/linkedPermissions", ensureAuthenticated, groupController.getGroupPermissionsLinked);

export { groupRoutes };
