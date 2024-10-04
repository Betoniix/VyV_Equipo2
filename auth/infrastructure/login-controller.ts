import { Request, Response } from "express";
import { AuthUser } from "../domain/usecase/auth-user";
import { UserData } from "../domain/dto/user-data";

export class LoginController {
  constructor(private readonly authCase: AuthUser) {}

  async authenticate(req: Request, res: Response) {
    try {
      const data = req.body as UserData;
      const result = await this.authCase.authData(data);

      res.send({ data: result });
    } catch (error) {
      const err: Error = error as Error;
      console.error(err.name, err);
      res.status(500).send({
        message: "Any user was found",
      });
    }
  }
}
