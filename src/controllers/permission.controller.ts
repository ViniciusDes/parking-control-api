import { Request, Response } from "express";
import { container } from "tsyringe";
import { PermissionsDTO } from "../interfaces/permissionsDTO.interface";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { PermissionsService } from "../services/permissions.service";

class PermissionsController {
  async createPermission(req: Request, res: Response) {
    const data: PermissionsDTO = req.body;

    try {
      const permissionsService = container.resolve(PermissionsService);

      await permissionsService.save(data);

      return res.status(201).send({
        success: true,
        message: "Permissão salva com sucesso",
      });
    } catch (error) {
      throw new ErrorCustom({
        statusCode: 500,
        message: error.message,
      });
    }
  }
}

export { PermissionsController };
