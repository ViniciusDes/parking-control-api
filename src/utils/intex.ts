export function messageValidateMaxCaracteres(qtty: number): string {
  return `Máximo ${qtty} caracteres, verifique`;
}

export function messageValidateTypeString(): string {
  return "O campo deve ser uma string, verifique";
}

export function messageValidateTypeNumber(): string {
  return "O campo deve ser do tipo number, verifique";
}

export function upperCase(text: string): string {
  return String(text).toUpperCase();
}
