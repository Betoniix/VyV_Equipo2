import { ISemester } from "../interface/ISemester";

export class RetrieveSemesters {
  constructor(private readonly repo: ISemester) {}

  async retrieve() {
    const semesters = await this.repo.GetAll();
    return semesters;
  }
}
