import * as z from 'zod';

export const NewPasswordFormSchema = z.object({
  password: z.string().min(6, {
    message: 'Mínimo de 6 caracteres requerido',
  }),
});
