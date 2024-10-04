import { generate } from "generate-password";
import { ICode } from "../interface/ICode";

export class GenerateCode {
  constructor(private readonly codeRepo: ICode) {}

  async generate(id: number) {
    const code = generate({
      length: 10,
      numbers: true,
      uppercase: true,
      lowercase: true,
    });

    await this.codeRepo.Desactivate(id);
    const validationCode = await this.codeRepo.SaveCode(code);

    return validationCode;
  }
}
