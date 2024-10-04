import { UpdateStudent } from "../dto/update-student";
import { IStudent } from "../interface/IStudent";

export class UpdateStudentCase {
  constructor(private readonly studentRepo: IStudent) {}

  async updateAccount(student: UpdateStudent) {
    const wasUpdated = await this.studentRepo.Update(student);
    return wasUpdated;
  }
}
