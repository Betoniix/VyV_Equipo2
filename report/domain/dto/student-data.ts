export interface StudentData {
  plate: string;
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  career: string;
  semester: string;
  homework: { date: string; sessionName: string; done: boolean }[];
  attendance: { date: string; sessionName: string; done: boolean }[];
}
