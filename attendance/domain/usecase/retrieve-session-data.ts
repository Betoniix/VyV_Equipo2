import { DateHandler } from "../../../util/date-handler";
import { ISession } from "../interface/ISession";

export class RetrieveSessionData {
  constructor(private readonly session: ISession) {}

  async RetrieveSession() {
    const today = DateHandler.Today();

    let session = await this.session.GetOne(today);

    return { id: session!.id, name: session!.name };
  }
}
