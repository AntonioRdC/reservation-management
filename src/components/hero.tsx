'use client';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="p-4">
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="flex flex-col justify-center items-center text-4xl md:text-5xl lg:text-6xl font-bold">
          <h1 className="flex justify-center items-center">
            <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Reserva
            </span>
            &nbsp;
            <p>de Espaços</p>
          </h1>
          <h1 className="flex flex-col md:flex-row justify-center items-center">
            <p>na cidade de&nbsp;</p>
            <div className="flex">
              <span className="bg-gradient-to-r from-[#61DAFB] to-[#5FC52E] text-transparent bg-clip-text">
                Ariquemes
              </span>
              <p>/RO</p>
            </div>
          </h1>
        </div>

        <p className="text-center text-xs md:text-xl">
          Crie Uma conta e faça Reservas em espaços públicos na cidade de
          Ariquemes
        </p>

        <div className="flex flex-col min-[1800px]:flex-row gap-1 p-1">
          <Link href="/">
            <Button variant="default" className="w-full">
              <AiOutlineWhatsApp className="w-5 h-5" />
              <p className="text-lg">Fale conosco pelo WhatsApp</p>
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="default" className="w-full">
              <LogIn className="w-5 h-5" />
              <p className="text-lg">Quero criar minha conta</p>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
