import { StudentData } from "../dto/student-data";

export interface IStudent {
  GetOne(plate: string): Promise<StudentData | null>;
}
