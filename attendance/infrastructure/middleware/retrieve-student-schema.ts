import { z } from "zod";
import { EMAIL_FORMAT } from "../../../util/validations";

export const RetrieveStudentSchema = z.object({
  params: z.object({
    encrypted: z.string().trim(),
  }),
});
