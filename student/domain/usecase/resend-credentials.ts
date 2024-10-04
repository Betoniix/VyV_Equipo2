import { IStudent } from "../interface/IStudent";
import { StudentCache } from "../../../util/cache/student-cache";

export class ResendCredentials {
  constructor(private readonly userRepo: IStudent) {}

  async Resend(studentID: number) {
    const cache = StudentCache.instance;
    const student = await this.userRepo.GetOne(studentID);

    if (student === null) throw new Error("Any account was found");

    cache.PushEmailData({
      name: student.name,
      plate: student.plate,
      to: student.email,
    });
  }
}
