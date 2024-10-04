import { StudentData } from "../../../util/cache/student-cache";

export interface IStudent {
  GetEmails(): StudentData[];
  SetEmails(emails: StudentData[]): void;
  get(id: number): Promise<number[]>;
}
