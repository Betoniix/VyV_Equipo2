import { Prisma } from "@prisma/client";
import { CreateSessionData } from "../../domain/dto/create-session-data";
import { SessionData } from "../../domain/dto/session-data";
import { ISession } from "../../domain/interface/ISession";

export class SessionRepository implements ISession {
  constructor(private readonly store: Prisma.sessionsDelegate) {}

  async Create(session: CreateSessionData): Promise<SessionData | null> {
    try {
      const createdSession = await this.store.create({
        data: {
          date: session.date,
          end_time: session.endTime,
          name: session.name,
          start_time: session.startTime,
        },
      });

      return {
        ...createdSession,
        endTime: createdSession.end_time,
        startTime: createdSession.start_time,
      };
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return null;
    }
  }

  async Update(session: SessionData): Promise<boolean> {
    try {
      await this.store.update({
        where: { id: session.id },
        data: {
          date: session.date,
          end_time: session.endTime,
          name: session.name,
          start_time: session.startTime,
        },
      });

      return true;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return false;
    }
  }
  async Delete(sessions: number[]): Promise<boolean> {
    try {
      await this.store.deleteMany({
        where: {
          id: {
            in: sessions,
          },
        },
      });

      return true;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return false;
    }
  }

  async GetOne(id: number): Promise<SessionData | null> {
    try {
      const session = await this.store.findFirst({
        where: { id: id },
        select: {
          id: true,
          date: true,
          end_time: true,
          name: true,
          start_time: true,
        },
      });

      if (session === null) throw new Error(`Any lender with that ID`);

      return {
        date: session.date,
        name: session.name,
        id: session.id,
        endTime: session.end_time,
        startTime: session.start_time,
      };
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return null;
    }
  }

  async GetAll(): Promise<SessionData[]> {
    try {
      const sessions = await this.store.findMany({
        select: {
          id: true,
          date: true,
          end_time: true,
          name: true,
          start_time: true,
        },
      });

      const mappedSessions: SessionData[] = sessions.map((session) => {
        return {
          date: session.date,
          name: session.name,
          id: session.id,
          endTime: session.end_time,
          startTime: session.start_time,
        };
      });

      return mappedSessions;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return [];
    }
  }
}
