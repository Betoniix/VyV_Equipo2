import client from "../util/prisma-client";
import { GenerateCode } from "./domain/usecase/generate-code";
import { GetInvitationCode } from "./domain/usecase/get-invitation-code";
import { CoderRepository } from "./infraestructure/repository/code-repository";
import { InvitationController } from "./invitation-controller";

const codeRepository = new CoderRepository(client.invitationcode);

const getCase = new GetInvitationCode(codeRepository);
const generateCase = new GenerateCode(codeRepository);

export const controller = new InvitationController(generateCase, getCase);
