'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { NewPasswordFormSchema } from '@/schemas/new-password-form.schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { newPassword } from '@/actions/new-password';

export function NewPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordFormSchema>>({
    resolver: zodResolver(NewPasswordFormSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordFormSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div>
      <Card className="flex flex-wrap flex-col md:flex-row lg:min-w-[1040px] lg:h-[500px] w-full max-w-[1080px] h-auto bg-zinc-900 p-4">
        <CardHeader className="h-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-between">
          <CardTitle className="text-3xl md:text-5xl font-semibold tracking-tight">
            Nova Senha
          </CardTitle>
          <CardDescription className="text-base font-semibold">
            Insira sua nova senha
          </CardDescription>
          <Button variant="secondary" className="text-lg mt-4">
            <Link href="/auth/login">Voltar ao login</Link>
          </Button>
        </CardHeader>
        <CardContent className="w-full md:w-1/2">
          <div className="grid gap-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="******"
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button disabled={isPending} type="submit" className="w-full">
                  Atualizar senha
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
      <p className="pt-4 text-center text-sm text-muted-foreground">
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Termos de Serviço
        </Link>{' '}
        e{' '}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Política de Privacidade
        </Link>
        .
      </p>
    </div>
  );
}
