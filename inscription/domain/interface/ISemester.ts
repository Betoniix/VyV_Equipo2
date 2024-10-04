import { SemesterOption } from "../dto/semester-option";

export interface ISemester {
  GetAll(): Promise<SemesterOption[]>;
}
