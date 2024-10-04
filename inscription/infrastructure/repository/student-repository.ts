import { Prisma } from "@prisma/client";
import { StudentData } from "../../domain/dto/student-data";
import { IStudent } from "../../domain/interface/IStudent";

export class StudentRepository implements IStudent {
  constructor(private readonly store: Prisma.studentsDelegate) {}

  async create(data: StudentData): Promise<boolean> {
    try {
      await this.store.create({
        data: {
          name: data.name,
          plate: data.plate,
          id_career: data.career,
          id_semester: data.semester,
          paternal_surname: data.fatherLastname,
          maternal_surname: data.motherLastname,
          email: data.email,
        },
      });

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
