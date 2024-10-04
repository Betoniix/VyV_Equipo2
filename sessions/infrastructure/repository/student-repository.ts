import { Prisma } from "@prisma/client";
import { StudentData } from "../../domain/dto/student-data";
import { IStudent } from "../../domain/interface/IStudent";

export class StudentRepository implements IStudent {
  constructor(private readonly store: Prisma.studentsDelegate) {}

  async GetAll(): Promise<StudentData[]> {
    try {
      const students = await this.store.findMany({
        select: { id: true, plate: true },
      });

      return students;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
