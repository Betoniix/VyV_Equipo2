import { Prisma } from '@prisma/client';
import { IPersonal } from '../../domain/interfaces/IPersonal';


export class AdminRepository implements IPersonal {
  constructor(private readonly store: Prisma.adminsDelegate) {}

  async FindIDByUserID(id: string): Promise<number> {
    const admin = await this.store.findFirst({
      where: { id_user: id },
      select: { id: true },
    });

    if (admin === null) throw new Error(`Any Admin Found`);

    return admin.id;
  }
}
