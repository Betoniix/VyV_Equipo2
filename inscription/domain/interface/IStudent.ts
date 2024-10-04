import { StudentData } from "../dto/student-data";

export interface IStudent {
  create(data: StudentData): Promise<boolean>;
}
