'use client';

import { SeparatorComponents } from '@/components/separator-components';

export function Footer() {
  return (
    <footer id="footer">
      <section className="border-t border-border/40 dark:border-border py-6 px-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-2">
        <div className="col-span-full xl:col-span-2 font-bold flex items-center justify-center">
          Reservas em Ariquemes
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h3>Contate-nos</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              WhatsApp
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Intagram
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Facebook
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h3>Sobre</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Lorem1
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Lorem2
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Lorem3
            </a>
          </div>
        </div>
      </section>

      <section className="container text-center pb-1">
        <h3>
          &copy; 2024 Page Made by{' '}
          <a
            target="_blank"
            href="https://github.com/AntonioRdC"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Antônio
          </a>
        </h3>
      </section>
    </footer>
  );
}
