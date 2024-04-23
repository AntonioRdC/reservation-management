'use client';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { BiLogIn } from 'react-icons/bi';

import { buttonVariants } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Reserva
            </span>{' '}
            de Espaços na cidade de
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] to-[#5FC52E] text-transparent bg-clip-text">
              Ariquemes
            </span>
            /RO
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Crie Uma conta e faça Reservas em espaços publicos na cidade de
          Ariquemes
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/"
            target="_blank"
            className={`w-full md:w-1/3 bg-emerald-500 ${buttonVariants({
              variant: 'default',
            })}`}
          >
            <AiOutlineWhatsApp className="ml-2 w-5 h-5" />
            Fale conosco pelo WhatsApp
          </Link>

          <Link
            href="/"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants()}`}
          >
            <BiLogIn className="mr-2 w-5 h-5" />
            Quero criar minha conta
          </Link>
        </div>
      </div>

      <div className="z-10">
        <Image
          src={'/runner.png'}
          alt="city"
          width={700}
          height={700}
          className="w-[300px] object-contain rounded-lg"
        />
      </div>
    </section>
  );
}
