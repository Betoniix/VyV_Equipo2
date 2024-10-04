import { SessionData } from "../dto/session-data";

export interface ISession {
  GetOne(today: Date): Promise<SessionData | null>;
}
