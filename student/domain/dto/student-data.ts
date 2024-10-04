export type StudentData = {
  id: number;
  name: string;
  fatherLastname: string;
  motherLastname: string;
  plate: string;
  semester: { id: number; name: string };
  career: { id: number; name: string };
  email: string;
};
