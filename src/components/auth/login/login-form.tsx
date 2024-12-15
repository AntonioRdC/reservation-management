'use client';

import { useState, useTransition } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LoginFormSchema } from '@/schemas/login-form.schema';
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
import { login } from '@/app/auth/login/service/login';
import { DEFAULT_LOGIN_REDIRECT } from '@/auth/routes';

export function LoginForm() {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl');
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email já existe com um provedor diferente!'
      : '';

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onClick = (provider: 'google') => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }
        })
        .catch(() => setError('Algo deu errado'));
    });
  };

  return (
    <div>
      <Card className="flex flex-wrap flex-col md:flex-row lg:min-w-[1040px] lg:h-[500px] w-full max-w-[1080px] h-auto bg-zinc-900 p-4">
        <CardHeader className="w-full md:w-1/2 mb-4 md:mb-0">
          <CardTitle className="text-3xl md:text-5xl font-semibold tracking-tight">
            Fazer Login
          </CardTitle>
          <CardDescription className="text-base font-semibold">
            Insira seu e-mail e senha abaixo para fazer login na sua conta
          </CardDescription>
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="antonio.ribeiro@example.com"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="******"
                            type="password"
                          />
                        </FormControl>
                        <Button
                          size="sm"
                          variant="link"
                          asChild
                          className="px-0 font-normal"
                        >
                          <Link href="/auth/reset">Esqueceu a senha?</Link>
                        </Button>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormError message={error || urlError} />
                <FormSuccess message={success} />
                <div className="flex flex-col md:flex-row gap-2">
                  <Link href="/auth/register" className="flex-1">
                    <Button variant="secondary" className="w-full">
                      Criar conta
                    </Button>
                  </Link>
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="flex-1 w-full"
                  >
                    Fazer Login
                  </Button>
                </div>
              </form>
            </Form>
            <div className="relative mx-1">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              type="button"
              className="mx-1"
              onClick={() => onClick('google')}
            >
              <FaGoogle className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </CardContent>
      </Card>
      <p className="pt-4 text-center text-sm text-muted-foreground">
        Ao clicar em Fazer Login, você concorda com nossos{' '}
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
