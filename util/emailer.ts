import nodemailer from "nodemailer";
import { EnvLoader } from "./env-loader";

interface IMailer {
  Send(msg: MessageDTO): Promise<boolean>;
}

export type MessageDTO = {
  html: string;
  email: string;
  subject: string;
};

export class NodeMail implements IMailer {
  private static _instance: IMailer | undefined = undefined;
  private transporter: nodemailer.Transporter;

  private constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: EnvLoader.AUTOMATIC_EMAIL,
        pass: EnvLoader.EMAIL_KEY!,
      },
    });
  }

  static get instance() {
    if (this._instance === undefined) {
      this._instance = new NodeMail();
    }
    return this._instance;
  }

  async Send(msg: MessageDTO): Promise<boolean> {
    try {
      await this.transporter.sendMail({
        from: EnvLoader.AUTOMATIC_EMAIL,
        to: msg.email,
        subject: msg.subject,
        html: msg.html,
      });
      console.log("Sending Email to", msg.email);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
