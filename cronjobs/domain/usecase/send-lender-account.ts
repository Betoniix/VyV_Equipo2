import { NodeMail } from "../../../util/emailer";
import { ILender } from "../interface/ILender";

export class SendLenderAccount {
  constructor(private readonly cache: ILender) {}

  async sendAccount() {
    console.log("-- Sending Lender Accounts --");
    const lenders = this.cache.GetEmails();
    const EMAILS_PER_MINUTE = lenders.length < 10 ? lenders.length : 10;
    const mailer = NodeMail.instance;
    const subject = "SAT-MIFI: Credenciales de acceso";

    for (let i = 0; i <= EMAILS_PER_MINUTE; i++) {
      if (lenders.length === 0) break;

      try {
        const lender = lenders.pop();
        if (lender === undefined) throw new Error("No Emails Left");

        const html = `
        <div style="background: #C79316; border-radius: 10px;padding: 0.6rem;font-family:'Helvetica'; color:#0E2C4C;">
        <h1>Credenciales para su cuenta SAT-MIFI</h1>
        <p>Estimado prestador ${lender.name}, el siguiente correo contiene las credenciales para poder registrar la asistencia de los alumnos</p>
        <p>
            <b>Email: </b>${lender.to} <br/>
            <b>Contraseña: </b>${lender.password}
        </p>
        </div>`;

        await mailer.Send({ html: html, subject: subject, email: lender.to });
      } catch (error) {
        console.error((error as Error).message, error as Error);
        break;
      }
    }

    this.cache.SetEmails(lenders);
  }
}
