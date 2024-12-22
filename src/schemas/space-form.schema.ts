import * as z from 'zod';

export const SpaceFormSchema = z.object({
  space: z.string().min(1, 'O espaço é obrigatória.'),
  category: z.string().min(1, 'A categoria é obrigatória.'),
  date: z.date({
    required_error: 'A data é obrigatória.',
    invalid_type_error: 'A data precisa ser válida.',
  }),
  startTime: z.string(),
  endTime: z.string(),
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
    )
    .optional(),
});
