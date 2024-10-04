import { CreateSessionData } from "../dto/create-session-data";
import { SessionData } from "../dto/session-data";

export interface ISession {
  Create(session: CreateSessionData): Promise<SessionData | null>;
  Update(session: SessionData): Promise<boolean>;
  Delete(sessions: number[]): Promise<boolean>;
  GetOne(id: number): Promise<SessionData | null>;
  GetAll(): Promise<SessionData[]>;
}
