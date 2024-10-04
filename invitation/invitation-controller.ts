import e, { NextFunction, Request, Response } from "express";
import { GenerateCode } from "./domain/usecase/generate-code";
import { GetInvitationCode } from "./domain/usecase/get-invitation-code";

export class InvitationController {
  constructor(
    private readonly generateCase: GenerateCode,
    private readonly getCase: GetInvitationCode
  ) {}

  async GetInvitationCode(_: Request, res: Response, next: NextFunction) {
    try {
      const invitation = await this.getCase.Get();
      res.send({ ...invitation });
    } catch (error) {
      next(error);
    }
  }

  async GenerateInvitationCode(req: Request, res: Response) {
    try {
      const { id } = req.body as { id: number };
      const invitation = await this.generateCase.generate(id);
      res.send({ ...invitation });
    } catch (error) {
      res.status(404).send({ message: (error as Error).message });
    }
  }
}
