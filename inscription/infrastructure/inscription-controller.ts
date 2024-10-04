import { Request, Response } from "express";
import { RegisterStudent } from "../domain/usecase/register-student";
import { StudentData } from "../domain/dto/student-data";
import { RetrieveCareers } from "../domain/usecase/retrieve-careers";
import { RetrieveSemesters } from "../domain/usecase/retrieve-semesters";

export class InscriptionController {
  constructor(
    private readonly registerCase: RegisterStudent,
    private readonly careersCase: RetrieveCareers,
    private readonly semestersCase: RetrieveSemesters
  ) {}

  async RegisterNewStudentAccount(req: Request, res: Response) {
    try {
      const studentData: StudentData = req.body;
      const result = await this.registerCase.RegisterNewStudent(studentData);
      res.send({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).send({ reason: "Something went wrong with DB" });
    }
  }

  async RetrieveAllCareers(_: Request, res: Response) {
    try {
      const result = await this.careersCase.retrieve();
      res.send({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).send({ reason: "cannot retrieve any career" });
    }
  }

  async RetrieveAllSemesters(_: Request, res: Response) {
    try {
      const result = await this.semestersCase.retrieve();
      res.send({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).send({ reason: "cannot retrieve any semester" });
    }
  }
}
