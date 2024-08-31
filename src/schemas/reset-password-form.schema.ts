import * as z from 'zod';

export const ResetFormSchema = z.object({
  email: z.string().email({
    message: 'O email é obrigatório',
  }),
});
