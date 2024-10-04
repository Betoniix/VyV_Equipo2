import { HomeworksRecords } from "../dto/homeworks-record";
import { IHomework } from "../interface/IHomework";
import { IStudent } from "../interface/IStudent";

export class UploadHomeworkSession {
  constructor(
    private readonly homeworkRepo: IHomework,
    private readonly studentRepo: IStudent
  ) {}

  async UploadHomework(records: HomeworksRecords) {
    const students = await this.studentRepo.GetAll();
    const errors: string[] = [];

    for (let student of students) {
      let isUploaded = await this.homeworkRepo.Upload({
        sessionId: records.sessionID,
        student: {
          id: student.id,
          done: records.plates.includes(student.plate),
        },
      });

      if (!isUploaded) {
        errors.push(student.plate);
      }
    }

    return errors;
  }
}
