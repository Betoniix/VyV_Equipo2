import { z } from "zod";

export const InvitationDataSchema = z.object({
  body: z.object({
    id: z.number(),
  }),
});
