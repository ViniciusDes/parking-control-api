import { inject, injectable } from "tsyringe";
import { GroupDTO } from "../interfaces/groupDTO.interface";
import { GroupRepositoryInterface } from "../repositories/group.repository.interface";
import { GroupServiceInterface } from "./group.service.interface";
import * as Yup from "yup";
import { ErrorCustom } from "../middlewares/ErrorCustom";
import { Groups } from "../entities/Groups";
import { GroupPermissionDTO } from "../interfaces/groupPermissioDTO.interface";
import { GroupPermissionRepositoryInterface } from "../repositories/groupPermisstion.repository.interface";

@injectable()
class GroupService implements GroupServiceInterface {
  constructor(
    @inject("GroupRepository")
    private groupsRepository: GroupRepositoryInterface,
    @inject("GroupPermissionsRepository")
    private groupPermissionsRepository: GroupPermissionRepositoryInterface
  ) {}
  private errors = {};

  private async validateData(data: GroupDTO) {
    try {
      await this.schemaValidate.validate(data, {
        abortEarly: false,
      });
      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        this.errors = validationErrors;
      } else {
      }
      return false;
    }
  }

  private schemaValidate = Yup.object().shape({
    id_company: Yup.string().required("Campo obrigatório"),
    description: Yup.string().max(250, "Máximo 250 caracteres, verifique").required("Campo obrigatório"),
  });

  async saveGroup(data: GroupDTO): Promise<void> {
    try {
      const dataIsValid = await this.validateData(data);

      if (!dataIsValid) {
        throw new ErrorCustom({
          statusCode: 501,
          message: JSON.stringify(this.errors),
        });
      }

      await this.groupsRepository.save(data);
    } catch (e) {
      throw new ErrorCustom({
        statusCode: 500,
        message: e.message,
      });
    }
  }

  async getGroups(description: string): Promise<Array<Groups>> {
    const groups = await this.groupsRepository.getAll(description);

    return groups;
  }

  async saveGroupPermissions(data: GroupPermissionDTO) {
    this.groupPermissionsRepository.save(data);
  }

  async getGroupPermissions(idGroup?: number): Promise<Array<GroupPermissionDTO>> {
    const groups = await this.groupPermissionsRepository.getAll(idGroup);
    return groups;
  }
}

export { GroupService };
