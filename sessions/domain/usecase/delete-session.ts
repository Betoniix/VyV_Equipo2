import { ISession } from "../interface/ISession";

export class DeleteSession {
  constructor(private readonly sessions: ISession) {}

  async DeleteMIFISession(toDelete: number[]) {
    const wasDeleted = await this.sessions.Delete(toDelete);
    if (!wasDeleted) throw new Error("Cannot delete the session");
    return wasDeleted;
  }
}
