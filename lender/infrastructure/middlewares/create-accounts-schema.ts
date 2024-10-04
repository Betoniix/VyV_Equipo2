import { z } from 'zod';
import { EMAIL_FORMAT } from '../../../util/validations';

export const CreateAccountsSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, 'Invalid name'),
    email: z.string().trim().regex(EMAIL_FORMAT, 'Invalid email'),
  }),
});
