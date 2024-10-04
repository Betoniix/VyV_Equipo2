import { Prisma } from "@prisma/client";
import { IHomework } from "../../domain/interface/IHomework";
import { UploadHomework } from "../../domain/dto/upload-homework";

export class HomeworkRepository implements IHomework {
  constructor(private readonly store: Prisma.homeworksDelegate) {}

  async Upload(homework: UploadHomework): Promise<boolean> {
    try {
      await this.store.create({
        data: {
          done: homework.student.done,
          id_session: homework.sessionId,
          id_student: homework.student.id,
        },
      });
      return true;
    } catch (error) {
      console.error((error as Error).name, error as Error);
      return false;
    }
  }
}
