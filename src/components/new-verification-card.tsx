'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import Link from 'next/link';
import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { newVerification } from '@/actions/new-verification';
import { FormSuccess } from '@/components/form-success';
import { FormError } from '@/components/form-error';

export function NewVerificationCard() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError('Token não encontrado!');
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Algo deu errado');
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div>
      <Card className="flex flex-wrap flex-col md:flex-row lg:min-w-[1040px] lg:h-[500px] w-full max-w-[1080px] h-auto bg-zinc-900 p-4">
        <CardHeader className="h-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-between">
          <CardTitle className="text-3xl md:text-5xl font-semibold tracking-tight">
            Verificar Email
          </CardTitle>
          <Button variant="secondary" className="text-lg mt-4">
            <Link href="/auth/login">Voltar ao login</Link>
          </Button>
        </CardHeader>
        <CardContent className="w-full md:w-1/2">
          <div className="grid gap-6">
            <div className="flex items-center w-full justify-center">
              {!success && !error && <BeatLoader />}
              <FormSuccess message={success} />
              {!success && <FormError message={error} />}
            </div>
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
