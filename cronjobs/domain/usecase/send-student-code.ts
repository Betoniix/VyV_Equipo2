import { NodeMail } from "../../../util/emailer";
import { HashMaker } from "../../../util/hash/hash-maker";
import { IStudent } from "../interface/IStudent";
import bcrypt from "bcrypt";

export class SendStudentAccount {
  constructor(private readonly cache: IStudent) {}

  async sendAccount() {
    const students = this.cache.GetEmails();
    const EMAILS_PER_MINUTE = students.length < 100 ? students.length : 100;
    const mailer = NodeMail.instance;
    const subject = "Credenciales";
    console.log("-- Sending Student QR --");

    for (let i = 0; i <= EMAILS_PER_MINUTE; i++) {
      if (students.length === 0) break;

      try {
        const student = students.pop();
        if (student === undefined) throw new Error("No Emails Left");

        const hashedPlate = HashMaker(student.plate);

        const html = `
          <div style="background: #C79316; border-radius: 10px;padding: 0.6rem;font-family:'Helvetica'; color:#0E2C4C;">
          <h1>Código QR MIFI</h1>
          <p>${student.name}</p>
          <p> El presente correo contiene el código QR que deberás presentar a un encargado del MIFI para el registro de asistencia en cada sesión.</p>
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=${hashedPlate}" />
          </div>`;

        await mailer.Send({
          html: html,
          subject: subject,
          email: student.to,
        });
      } catch (error) {
        console.error((error as Error).message, error as Error);
        break;
      }
    }

    this.cache.SetEmails(students);
  }
}
