import { CareerOption } from "../dto/career-option";

export interface ICareer {
  GetAll(): Promise<CareerOption[]>;
}
