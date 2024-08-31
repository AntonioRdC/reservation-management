'use client';

import { SeparatorComponents } from '@/components/separator-components';

export function Footer() {
  return (
    <>
      <SeparatorComponents />
      <footer id="footer">
        <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <a href="/" className="font-bold text-xl flex">
              Cidades Inteligentes
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Follow US</h3>
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

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
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

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">About</h3>
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

        <section className="container pb-14 text-center">
          <h3>
            &copy; 2024 Page Made by{' '}
            <a
              target="_blank"
              href="https://cidadesinteligentes.online/"
              className="text-primary transition-all border-primary hover:border-b-2"
            >
              Cidades Inteligentes
            </a>
          </h3>
        </section>
      </footer>
    </>
  );
}
