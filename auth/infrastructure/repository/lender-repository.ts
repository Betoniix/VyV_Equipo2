import { Prisma } from '@prisma/client';
import { IPersonal } from '../../domain/interfaces/IPersonal';


export class LendersRepository implements IPersonal {
  constructor(private readonly store: Prisma.lendersDelegate) {}

  async FindIDByUserID(id: string): Promise<number> {
    const student = await this.store.findFirst({
      where: { id_user: id },
      select: { id: true },
    });

    if (student === null) throw new Error(`Any Student Found`);

    return student.id;
  }
}
