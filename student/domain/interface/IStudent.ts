import { StudentData } from "../dto/student-data";
import { UpdateStudent } from "../dto/update-student";

export interface IStudent {
  Delete(usersID: number[]): Promise<boolean>;
  GetOne(id: number): Promise<StudentData | null>;
  GetAll(): Promise<StudentData[]>;
  Update(student: UpdateStudent): Promise<boolean>;
}
