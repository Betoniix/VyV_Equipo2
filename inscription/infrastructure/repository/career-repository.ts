import { Prisma } from "@prisma/client";
import { CareerOption } from "../../domain/dto/career-option";
import { ICareer } from "../../domain/interface/ICareer";

export class CareerRepository implements ICareer {
  constructor(private readonly store: Prisma.careersDelegate) {}

  async GetAll(): Promise<CareerOption[]> {
    try {
      const careers = await this.store.findMany();
      return careers;
    } catch (error) {
      return [];
    }
  }
}
