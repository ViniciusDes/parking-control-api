interface CustomError {
  statusCode: number;
  message?: string;
}
export class ErrorCustom extends Error {
  private statusCode: number;

  constructor({ message, statusCode }: CustomError) {
    super(message);
    this.statusCode = statusCode;
  }
}
