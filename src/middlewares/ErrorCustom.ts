import { NextFunction, Response } from "express";

interface CustomError {
  statusCode?: number;
  message?: string;
  name?: string;
}
export class ErrorCustom extends Error {
  private statusCode: number;

  constructor({ message, statusCode, name }: CustomError) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
  }
}
