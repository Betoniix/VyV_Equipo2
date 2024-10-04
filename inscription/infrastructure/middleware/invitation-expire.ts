import { NextFunction, Request, Response } from "express";
import { StudentData } from "../../domain/dto/student-data";
import client from "../../../util/prisma-client";
import { ExpiredError } from "../../../util/errores";

export const InvitationExpire = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  try {
    const register: StudentData = req.body as StudentData;

    const invitation = await client.invitationcode.findFirst({
      where: {
        code: register.invitation,
        active: true,
      },
      select: {
        expire: true,
      },
    });

    if (!invitation)
      throw new ExpiredError("El codigo no existe, o ha expirado");

    next();
  } catch (error) {
    next(error);
  }
};
