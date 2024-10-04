import { Decrypt } from "../../../util/hash/decrypt";
import { QRData } from "../dto/qr-data";
import { IStudent } from "../interface/IStudent";

export class RetrieveStudentData {
  constructor(private readonly store: IStudent) {}

  async RetrieveStudent(data: QRData) {
    const plate = Decrypt(data.encrypted);

    const student = await this.store.GetOne(plate);

    if (student === null)
      throw new Error(`Unable to find student with id: ${plate}`);

    return student;
  }
}
