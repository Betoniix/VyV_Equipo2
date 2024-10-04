import { z } from "zod";

export const DeleteAccountsSchema = z.object({
  body: z.object({
    students: z.array(z.number()).nonempty("Student list cannot be empty"),
  }),
});
