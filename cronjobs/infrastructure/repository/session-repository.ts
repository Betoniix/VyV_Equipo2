import { Prisma } from "@prisma/client";
import { ISession, SessionData } from "../../domain/interface/ISession";
import { DateHandler } from "../../../util/date-handler";

export class SessionRepository implements ISession {
  constructor(private readonly store: Prisma.sessionsDelegate) {}

  async MarkCheckSession(id: number): Promise<void> {
    await this.store.update({
      where: {
        id: id,
      },
      data: {
        check: true,
      },
    });
  }

  async GetAll(today: Date): Promise<SessionData[]> {
    try {
      const sessions = await this.store.findMany({
        where: {
          end_time: {
            lte: today,
          },
          check: false,
        },
        select: {
          id: true,
          end_time: true,
        },
      });

      if (sessions === null) throw new Error("Any session found");

      return sessions.map((session) => {
        return { endTime: session.end_time, id: session.id };
      });
    } catch (error) {
      console.log((error as Error).message);
      return [];
    }
  }
}
