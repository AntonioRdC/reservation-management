import * as z from 'zod';

export const RegisterFormSchema = z.object({
  email: z.string().email({
    message: 'O email é obrigatório',
  }),
  password: z.string().min(6, {
    message: 'Mínimo de 6 caracteres requerido para a senha',
  }),
  name: z.string().min(1, {
    message: 'O nome é obrigatório',
  }),
});
