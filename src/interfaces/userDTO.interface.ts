interface UserDTO {
  id?: number;
  name: string;
  cpf?: string;
  email?: string;
  id_company: number;
  situation: string;
  created_at?: Date;
}

export { UserDTO };
