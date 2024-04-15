import * as z from 'zod';

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Mínimo de 6 caracteres requerido',
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'O email é obrigatório',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'O email é obrigatório',
  }),
  password: z.string().min(1, {
    message: 'A senha é obrigatória',
  }),
});

export const RegisterSchema = z.object({
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

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: 'Nova senha é obrigatória!',
      path: ['newPassword'],
    },
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: 'Senha é obrigatória!',
      path: ['password'],
    },
  );
