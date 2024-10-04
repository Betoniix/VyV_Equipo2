import { StudentData } from "../dto/student-data";

export interface IStudent {
  GetAll(): Promise<StudentData[]>;
}
