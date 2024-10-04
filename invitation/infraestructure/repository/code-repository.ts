import { Prisma } from "@prisma/client";
import { ICode } from "../../domain/interface/ICode";
import { InvitationCode } from "../../domain/dto/invitation.code";
import { DateHandler } from "../../../util/date-handler";

export class CoderRepository implements ICode {
  constructor(private readonly store: Prisma.invitationcodeDelegate) {}

  async Get(): Promise<InvitationCode> {
    const result = await this.store.findFirst({ where: { active: true } });

    if (!result) throw new Error("No hay codigos activos");

    return { code: result.code, id: result.id, expire: result.expire };
  }

  async Desactivate(id: number): Promise<void> {
    const isActive = await this.store.findFirst({
      where: {
        id: id,
        active: true,
      },
    });

    if (!isActive)
      throw new Error("The code given is expired alredy or doesn't exist");

    await this.store.update({
      where: { id: id },
      data: { active: false },
    });
  }

  async SaveCode(code: string): Promise<InvitationCode> {
    const today = DateHandler.SetTime(new Date(), {
      hour: 23,
      minute: 59,
      second: 0,
      millisecond: 0,
    });

    const expire = DateHandler.AddTime(today, { days: 15 });

    const result = await this.store.create({
      data: {
        active: true,
        code: code,
        expire: expire,
      },
    });

    return { code: result.code, id: result.id, expire: result.expire };
  }
}
