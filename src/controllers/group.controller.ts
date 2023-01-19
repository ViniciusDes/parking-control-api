import { Request, Response } from "express";
import { container } from "tsyringe";
import { GroupPermissionDTO } from "../interfaces/groupPermissioDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { GroupService } from "../services/group.service";

class GroupController {
  async saveGroup(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const groupService = container.resolve(GroupService);

    try {
      const users = await groupService.saveGroup(data);

      return res.status(201).send({
        success: true,
        message: "",
        data: users,
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }

  async getAllGroups(req: Request, res: Response): Promise<Response> {
    const description = req.query.description ?? "";
    const groupService = container.resolve(GroupService);

    try {
      const users = await groupService.getGroups(String(description));

      return res.status(201).send({
        success: true,
        message: "",
        data: users,
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }

  async bindGroupWithPermission(req: Request, res: Response): Promise<Response> {
    const data: GroupPermissionDTO = req.body;
    const groupService = container.resolve(GroupService);

    try {
      await groupService.saveGroupPermissions(data);

      return res.status(201).send({
        success: true,
        message: "",
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }

  async getGroupPermissionsLinked(req: Request, res: Response): Promise<Response> {
    const data: { id_group?: number } = req.query;
    const groupService = container.resolve(GroupService);
    console.log("data", data);
    try {
      const groupsPermissions = await groupService.getGroupPermissions(data.id_group);

      return res.status(201).send({
        success: true,
        message: "Sucesso ao listar GruposDe permissões",
        data: groupsPermissions,
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }
}
export { GroupController };
