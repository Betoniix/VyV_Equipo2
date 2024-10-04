import { Prisma } from "@prisma/client";
import { IStudent } from "../../domain/interfaces/IStudent";
import { StudentData } from "../../domain/dto/student-data";

export class StudentRepository implements IStudent {
  constructor(private readonly store: Prisma.studentsDelegate) {}

  async GetAll(): Promise<StudentData[]> {
    try {
      const students = await this.store.findMany({
        select: {
          plate: true,
          name: true,
          maternal_surname: true,
          paternal_surname: true,
          career: { select: { name: true } },
          semester: { select: { name: true } },
          homeworks: {
            select: {
              done: true,
              session: { select: { date: true, name: true } },
            },
          },
          attendances: {
            select: {
              done: true,
              session: { select: { date: true, name: true } },
            },
          },
        },
      });

      const mapped: StudentData[] = students.map((student) => {
        return {
          name: student.name,
          plate: student.plate,
          maternalSurname: student.maternal_surname,
          paternalSurname: student.paternal_surname,
          semester: student.semester.name,
          career: student.career.name,
          attendance: student.attendances.map((attendance) => {
            return {
              done: attendance.done,
              sessionName: attendance.session.name,
              date: new Date(attendance.session.date).toISOString(), // Convertir a string
            };
          }),
          homework: student.homeworks.map((homework) => {
            return {
              done: homework.done,
              sessionName: homework.session.name,
              date: new Date(homework.session.date).toISOString(), // Convertir a string
            };
          }),
        };
      });

      return mapped;
    } catch (error) {
      return [];
    }
  }
}
