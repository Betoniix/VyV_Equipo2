import { ICareer } from "../interface/ICareer";

export class RetrieveCareers {
  constructor(private readonly repo: ICareer) {}

  async retrieve() {
    const careers = await this.repo.GetAll();
    return careers;
  }
}
