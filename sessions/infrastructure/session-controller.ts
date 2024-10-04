import { Request, Response } from "express";
import { CreateSessions } from "../domain/usecase/create-session";
import { CreateSessionData } from "../domain/dto/create-session-data";
import { HomeworksRecords } from "../domain/dto/homeworks-record";
import { SessionData } from "../domain/dto/session-data";
import { DeleteSession } from "../domain/usecase/delete-session";
import { RetrieveSessions } from "../domain/usecase/retrieve-session";
import { UpdateSession } from "../domain/usecase/update-session";
import { UploadHomeworkSession } from "../domain/usecase/upload-homework-session";

export class SessionsController {
  constructor(
    private readonly create: CreateSessions,
    private readonly deleteCase: DeleteSession,
    private readonly retrieveCase: RetrieveSessions,
    private readonly updateCase: UpdateSession,
    private readonly homeworkCase: UploadHomeworkSession
  ) {}

  async CreateSession(req: Request, res: Response) {
    try {
      const newSession: CreateSessionData = req.body;

      const result = await this.create.CreateNewSession(newSession);
      res.send({ data: result });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot create the session" });
    }
  }

  async Update(req: Request, res: Response) {
    try {
      const toUpdated: SessionData = req.body;
      const result = await this.updateCase.UpdateMIFISession(toUpdated);
      res.send({ data: result });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot Get All Lender Account" });
    }
  }

  async GetOne(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await this.retrieveCase.RetrieveOneSession(parseInt(id));
      res.send({ data: result });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot Get All Lender Account" });
    }
  }

  async GetAll(_: Request, res: Response) {
    try {
      const result = await this.retrieveCase.RetrieveAllSession();
      res.send({ data: result });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot Get All Lender Account" });
    }
  }

  async Delete(req: Request, res: Response) {
    try {
      const toDelete: { ids: number[] } = req.body;
      const result = await this.deleteCase.DeleteMIFISession(toDelete.ids);
      res.send({ data: result });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot Get All Lender Account" });
    }
  }

  async Upload(req: Request, res: Response) {
    try {
      const records: HomeworksRecords = req.body;
      const result = await this.homeworkCase.UploadHomework(records);
      res.send({ data: result });
    } catch (error) {
      console.error(error);
      res.status(500).send({ reason: "Cannot upload the homeworks" });
    }
  }
}
