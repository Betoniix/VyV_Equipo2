import { CreateSessionData } from "../dto/create-session-data";
import { ISession } from "../interface/ISession";

export class CreateSessions {
  constructor(private readonly sessions: ISession) {}

  async CreateNewSession(data: CreateSessionData) {
    const session = await this.sessions.Create(data);
    if (session === null)
      throw new Error("Cannot Create the session, name o date are the same");
    return session;
  }
}
