import { SessionData } from "../dto/session-data";
import { ISession } from "../interface/ISession";

export class UpdateSession {
  constructor(private readonly sessions: ISession) {}

  async UpdateMIFISession(toUpdate: SessionData) {
    const session = await this.sessions.Update(toUpdate);
    if (!session)
      throw new Error("Cannot Create the session, name o date are the same");
    return session;
  }
}
