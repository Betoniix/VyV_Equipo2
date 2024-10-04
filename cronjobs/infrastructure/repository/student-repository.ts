import { Prisma } from "@prisma/client";
import { StudentCache, StudentData } from "../../../util/cache/student-cache";
import { IStudent } from "../../domain/interface/IStudent";

export class StudentRepository implements IStudent {
  constructor(
    private readonly cache: StudentCache,
    private readonly store: Prisma.studentsDelegate
  ) {}

  async get(id: number): Promise<number[]> {
    try {
      const students = await this.store.findMany({
        where: { attendances: { none: { id_student: id } } },
        select: { id: true },
      });

      return students.map((student) => student.id);
    } catch (error) {
      console.log((error as Error).message);
      return [];
    }
  }

  GetEmails(): StudentData[] {
    return this.cache.StudentEmailList();
  }

  SetEmails(emails: StudentData[]): void {
    emails.forEach((email) => {
      this.cache.PushEmailData(email);
    });
  }
}
