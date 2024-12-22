import * as z from 'zod';

export const SpaceFormSchema = z
  .object({
    space: z.string(),
    category: z.string(),
    date: z.date({
      required_error: 'A data é obrigatória.',
      invalid_type_error: 'A data precisa ser válida.',
    }),
    startTime: z.date({
      required_error: 'O horário de início é obrigatório.',
      invalid_type_error: 'O horário de início precisa ser válido.',
    }),
    endTime: z.date({
      required_error: 'O horário de término é obrigatório.',
      invalid_type_error: 'O horário de término precisa ser válido.',
    }),
    resources: z.array(
      z.object({
        id: z.string(),
        quantity: z
          .number()
          .int('A quantidade deve ser um número inteiro.')
          .min(1, 'A quantidade mínima é 1.'),
      }),
    ),
    image: z
      .instanceof(File)
      .refine(
        (file) => ['image/jpeg', 'image/png'].includes(file.type),
        'O formato da imagem deve ser JPEG, PNG.',
      )
      .refine(
        (file) => file.size <= 5 * 1024 * 1024,
        'A imagem deve ter no máximo 5MB.',
      ),
  })
  .refine((data) => data.endTime > data.startTime, {
    message: 'O horário de término deve ser posterior ao horário de início.',
    path: ['endTime'],
  });
