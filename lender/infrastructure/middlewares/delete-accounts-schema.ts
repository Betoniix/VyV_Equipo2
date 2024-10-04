import { z } from "zod";

export const DeleteAccountsSchema = z.object({
  body: z.object({
    lenders: z.array(z.string()).nonempty("Lender list cannot be empty"),
  }),
});
