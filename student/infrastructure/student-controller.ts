import { Request as Req, Response as Res } from "express";
import { UpdateStudentCase } from "../domain/usecase/update-student-account";
import { DeleteLenderAccount } from "../domain/usecase/delete-lender-account";
import { RetrieveStudentCase } from "../domain/usecase/retrieve-student";
import { ResendCredentials } from "../domain/usecase/resend-credentials";
import { UpdateStudent } from "../domain/dto/update-student";

export class StudentController {
  constructor(
    private readonly updateAccountCase: UpdateStudentCase,
    private readonly deleteStudentAccountCase: DeleteLenderAccount,
    private readonly studentAccountCase: RetrieveStudentCase,
    private readonly resendCredentialsCase: ResendCredentials
  ) {}

  async ResendData(req: Req, res: Res) {
    try {
      const { id } = req.body as { id: number };
      await this.resendCredentialsCase.Resend(id);
      res.send({ data: true });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot resend QR" });
    }
  }

  async deleteAccounts(req: Req, res: Res) {
    try {
      const accounts: { students: number[] } = req.body;
      const wasDeleted = await this.deleteStudentAccountCase.DeleteAccounts(
        accounts.students
      );

      if (!wasDeleted) throw new Error("Maybe some account id is invalid");

      res.send({ data: wasDeleted });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Account cannot be delete " });
    }
  }

  async updateAccount(req: Req, res: Res) {
    try {
      const updateData: UpdateStudent = req.body;

      const response = await this.updateAccountCase.updateAccount(updateData);

      res.send({ data: response });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot update student account" });
    }
  }

  async getOneAccount(req: Req, res: Res) {
    try {
      const { id } = req.params;

      const studentData = await this.studentAccountCase.RetrieveStudentData(
        parseInt(id)
      );

      res.send({ data: studentData });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot get student account" });
    }
  }

  async getAllAccount(_: Req, res: Res) {
    try {
      const result = await this.studentAccountCase.getAllAccounts();
      res.send({ data: result });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot get all lender accounts" });
    }
  }
}
