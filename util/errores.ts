export class ErrorPersonalizado {
  public name!: string;
  public message!: string;
  public code!: number;
}

export class DatosInvalidos extends ErrorPersonalizado implements Error {
  name: string = "Datos Invalidos";
  message: string;
  code: number = 400;

  constructor(message: string) {
    super();
    this.message = message;
  }
}

export class ConflictoDatos extends ErrorPersonalizado implements Error {
  name: string = "Conflictos en los datos";
  message: string;
  code: number = 409;

  constructor(message: string) {
    super();
    this.message = message;
  }
}

export class ExpiredError extends ErrorPersonalizado implements Error {
  name: string = "Dato expirado";
  message: string;
  code: number = 410;

  constructor(message: string) {
    super();
    this.message = message;
  }
}
