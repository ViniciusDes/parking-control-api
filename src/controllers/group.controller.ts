import { Request, Response } from "express";
import { container } from "tsyringe";
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
}
export { GroupController };
