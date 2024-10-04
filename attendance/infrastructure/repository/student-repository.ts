import { Prisma } from "@prisma/client";
import { IStudent } from "../../domain/interface/IStudent";
import { StudentData } from "../../domain/dto/student-data";

export class StudentRepository implements IStudent {
  constructor(private readonly store: Prisma.studentsDelegate) {}

  async GetOne(plate: string): Promise<StudentData | null> {
    try {
      const student = await this.store.findFirst({
        where: { plate: plate },
        select: {
          id: true,
          name: true,
          paternal_surname: true,
          maternal_surname: true,
        },
      });

      if (student === null)
        throw new Error(`Student doesn't exist with plate ${plate}`);

      const studentMap: StudentData = {
        id: student.id,
        name: student.name,
        maternalSurname: student.maternal_surname,
        paternalSurname: student.paternal_surname,
      };

      return studentMap;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
