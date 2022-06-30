import { Response } from "express";

export interface ResponseInterface extends Response {
  success?: boolean;
  message?: string;
  data?: [];
}
