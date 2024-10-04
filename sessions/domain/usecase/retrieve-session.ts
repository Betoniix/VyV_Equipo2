import { ISession } from "../interface/ISession";

export class RetrieveSessions {
  constructor(private readonly sessions: ISession) {}

  async RetrieveOneSession(id: number) {
    const session = await this.sessions.GetOne(id);
    if (session === null) throw new Error("Cannot retrieve the session");
    return session;
  }

  async RetrieveAllSession() {
    const session = await this.sessions.GetAll();
    if (session === null) throw new Error("Cannot retrieve the sessions");
    return session;
  }
}
