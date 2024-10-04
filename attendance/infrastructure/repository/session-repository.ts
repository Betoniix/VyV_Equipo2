import { Prisma } from "@prisma/client";
import { SessionData } from "../../domain/dto/session-data";
import { ISession } from "../../domain/interface/ISession";

export class SessionRepository implements ISession {
  constructor(private readonly store: Prisma.sessionsDelegate) {}

  async GetOne(today: Date): Promise<SessionData | null> {
    try {
      const session = await this.store.findFirst({
        where: {
          start_time: {
            lte: today,
          },
          end_time: {
            gte: today,
          },
        },
        select: {
          start_time: true,
          end_time: true,
          name: true,
          id: true,
        },
      });
      const result = await this.store.findMany({});

      if (session === null) throw new Error("There is no session active today");

      return {
        id: session.id,
        name: session.name,
        endTime: session.end_time,
        startTime: session.start_time,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
