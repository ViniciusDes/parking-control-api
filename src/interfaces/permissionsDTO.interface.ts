interface PermissionsDTO {
  id?: number;
  id_company: number;
  description: string;
  situation: string;
}

type GetPermissionsDTO = Array<PermissionsDTO>;

export { PermissionsDTO, GetPermissionsDTO };
