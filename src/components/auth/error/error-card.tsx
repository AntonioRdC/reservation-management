import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const ErrorCard = () => {
  return (
    <div>
      <Card className="flex flex-wrap flex-col md:flex-row lg:min-w-[1040px] lg:h-[500px] w-full max-w-[1080px] h-auto bg-zinc-900 p-4">
        <CardHeader className="h-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-between">
          <CardTitle className="text-3xl md:text-5xl font-semibold tracking-tight">
            Algo deu errado
          </CardTitle>
          <Button variant="secondary" className="text-lg mt-4">
            <Link href="/auth/login">Voltar ao login</Link>
          </Button>
        </CardHeader>
        <CardContent className="w-full md:w-1/2">
          <div className="flex justify-center items-center h-full w-full gap-6">
            <ExclamationTriangleIcon className="text-destructive" />
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
};
