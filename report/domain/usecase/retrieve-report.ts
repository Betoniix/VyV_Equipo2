import { IStudent } from "../interfaces/IStudent";

type Score = {
  date: string;
  sessionName: string;
  done: boolean;
}[];

export class StudentReport {
  constructor(private readonly studentRepo: IStudent) {}

  async Generate() {
    const students = await this.studentRepo.GetAll();

    const mappedReport = students.map((student) => {
      return {
        name: student.name,
        paternalSurname: student.paternalSurname,
        maternalSurname: student.maternalSurname,
        plate: student.plate,
        career: student.career,
        semester: student.semester,
        score: this.MakeScore(student.homework, student.attendance),
      };
    });

    return mappedReport;
  }

  private MakeScore(homework: Score, attendances: Score) {
    const score: {
      session: string;
      done: boolean;
      date: string;
      type: string;
    }[] = [];

    homework.forEach((work) => {
      score.push({
        session: work.sessionName,
        done: work.done,
        date: work.date,
        type: "homework",
      });
    });

    attendances.forEach((attendance) => {
      score.push({
        session: attendance.sessionName,
        done: attendance.done,
        date: attendance.date,
        type: "attendance",
      });
    });

    return score;
  }
}
