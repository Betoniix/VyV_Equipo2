import { Request, Response } from "express";
import { StudentReport } from "../domain/usecase/retrieve-report";

export class LoginController {
  constructor(private readonly report: StudentReport) {}

  async GenerateReport(_: Request, res: Response) {
    try {
      const result = await this.report.Generate();
      res.send({ data: result });
    } catch (error) {
      const err: Error = error as Error;
      console.error(err.name, err);
      res.status(500).send({
        message: "Error generating report",
      });
    }
  }
}
