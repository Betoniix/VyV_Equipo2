import { Request as Req, Response as Res } from "express";
import { UpdateStudentAccountCase } from "../domain/usecase/update-lender-account";
import { RegisterLenderAccount } from "../domain/usecase/create-lender-account";
import { DeleteLenderAccount } from "../domain/usecase/delete-lender-account";
import { GetLenderAccount } from "../domain/usecase/retrieve-lender-account";
import { LenderData } from "../domain/dto/lender-data";
import { ReSendCredentials } from "../domain/usecase/resend-credentials";
import { LenderAccount } from "../domain/dto/lender-account";

export class LenderController {
  constructor(
    private readonly updateAccountCase: UpdateStudentAccountCase,
    private readonly loadStudentAccountCase: RegisterLenderAccount,
    private readonly deleteStudentAccountCase: DeleteLenderAccount,
    private readonly studentAccountCase: GetLenderAccount,
    private readonly resendCredentialsCase: ReSendCredentials
  ) {}

  async ResendData(req: Req, res: Res) {
    try {
      const id = req.params.id;
      await this.resendCredentialsCase.ResendCredentials(id);
      res.send({ data: true });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot Resend Credentials" });
    }
  }

  async createAccount(req: Req, res: Res) {
    try {
      const studentsAccounts: LenderData = req.body;

      const createdAccounts = await this.loadStudentAccountCase.CreateAccount(
        studentsAccounts
      );

      res.send({ data: createdAccounts });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot Create Lender Account" });
    }
  }

  async deleteAccounts(req: Req, res: Res) {
    try {
      const accounts: { lenders: string[] } = req.body;
      const wasDeleted = await this.deleteStudentAccountCase.DeleteAccounts(
        accounts.lenders
      );

      if (!wasDeleted) throw new Error("Maybe some account id is invalid");

      res.send({ data: wasDeleted });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot Delete Account" });
    }
  }

  async updateAccount(req: Req, res: Res) {
    try {
      const updateData: LenderAccount = req.body;

      const response = await this.updateAccountCase.updateAccount(updateData);

      res.send({ data: response });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot Update Lender Account" });
    }
  }

  async getOneAccount(req: Req, res: Res) {
    try {
      const { id } = req.params;

      const studentData = await this.studentAccountCase.RetrieveLenderAccount(
        id
      );

      res.send({ data: studentData });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot Get Lender Account" });
    }
  }

  async getAllAccount(_: Req, res: Res) {
    try {
      const result = await this.studentAccountCase.getAllAccounts();
      res.send({ data: result });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot Get All Lender Account" });
    }
  }
}
