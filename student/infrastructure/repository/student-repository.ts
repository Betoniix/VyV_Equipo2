import { Prisma } from "@prisma/client";
import { IStudent } from "../../domain/interface/IStudent";
import { UpdateStudent } from "../../domain/dto/update-student";
import { StudentData } from "../../domain/dto/student-data";

export class StudentRepository implements IStudent {
  constructor(private store: Prisma.studentsDelegate) {}

  async Update(student: UpdateStudent): Promise<boolean> {
    try {
      await this.store.update({
        where: { id: student.id },
        data: {
          id_career: student.careerID,
          id_semester: student.semesterID,
          name: student.name,
          email: student.email,
          maternal_surname: student.motherLastname,
          paternal_surname: student.fatherLastname,
          plate: student.plate,
        },
      });

      return true;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return false;
    }
  }

  async GetOne(id: number): Promise<StudentData | null> {
    try {
      const student = await this.store.findFirst({
        where: { id: id },
        select: {
          id: true,
          email: true,
          name: true,
          plate: true,
          maternal_surname: true,
          paternal_surname: true,
          career: { select: { id: true, name: true } },
          semester: { select: { id: true, name: true } },
        },
      });

      if (student === null) throw new Error(`Any lender with that ID`);

      return {
        id: student.id,
        email: student.email,
        name: student.name,
        plate: student.plate,
        motherLastname: student.maternal_surname,
        fatherLastname: student.paternal_surname,
        career: { id: student.career.id, name: student.career.name },
        semester: { id: student.semester.id, name: student.semester.name },
      };
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return null;
    }
  }

  async GetAll(): Promise<StudentData[]> {
    try {
      const accounts = await this.store.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          plate: true,
          maternal_surname: true,
          paternal_surname: true,
          career: { select: { id: true, name: true } },
          semester: { select: { id: true, name: true } },
        },
      });
      const mappedAccounts: StudentData[] = accounts.map((student) => {
        return {
          id: student.id,
          email: student.email,
          name: student.name,
          plate: student.plate,
          motherLastname: student.maternal_surname,
          fatherLastname: student.paternal_surname,
          career: { id: student.career.id, name: student.career.name },
          semester: { id: student.semester.id, name: student.semester.name },
        };
      });

      return mappedAccounts;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return [];
    }
  }

  async Delete(usersID: number[]): Promise<boolean> {
    try {
      await this.store.deleteMany({
        where: {
          id: {
            in: usersID,
          },
        },
      });

      return true;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return false;
    }
  }
}
