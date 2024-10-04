export type SessionData = { id: number; endTime: Date };

export interface ISession {
  GetAll(today: Date): Promise<SessionData[]>;
  MarkCheckSession(id: number): Promise<void>;
}
