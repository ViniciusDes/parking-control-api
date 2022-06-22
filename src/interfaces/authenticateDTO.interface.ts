import { User } from "../entities/User";

export interface AuthenticateRequestDTO {
  email: string;
  password: string;
}

export interface AuthenticateReponse {
  user: User;
  token: string;
}
