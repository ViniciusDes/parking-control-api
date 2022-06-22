interface UserDTO {
  id?: number;
  name: string;
  email?: string;
  password: string;
  cpf?: string;
  id_company: number;
  situation: string;
  created_at?: Date;
}

export { UserDTO };
