import { Prisma } from "@prisma/client";
import { SemesterOption } from "../../domain/dto/semester-option";
import { ISemester } from "../../domain/interface/ISemester";

export class SemesterRepository implements ISemester {
  constructor(private readonly store: Prisma.semestersDelegate) {}

  async GetAll(): Promise<SemesterOption[]> {
    try {
      const semesters = await this.store.findMany();
      return semesters;
    } catch (error) {
      return [];
    }
  }
}
