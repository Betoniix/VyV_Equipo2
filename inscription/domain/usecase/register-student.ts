import { StudentCache } from "../../../util/cache/student-cache";
import { StudentData } from "../dto/student-data";
import { IStudent } from "../interface/IStudent";

export class RegisterStudent {
  constructor(private readonly studentRepo: IStudent) {}

  async RegisterNewStudent(data: StudentData) {
    const wasCreated = await this.studentRepo.create(data);

    if (!wasCreated) throw new Error();

    const fullName = `${data.name} ${data.fatherLastname} ${data.motherLastname}`;

    StudentCache.instance.PushEmailData({
      name: fullName,
      plate: data.plate,
      to: data.email,
    });

    return wasCreated;
  }
}
