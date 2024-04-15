'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SeparatorComponents } from '@/components/separator-components';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'As Reservas são Grátuitas?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    question: 'Como faço pra fazer minha Reserva?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    question: 'Posso reservar lugares para eventos?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.?',
  },
];

export function FAQ() {
  return (
    <>
      <SeparatorComponents />
      <section id="faq" className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
            Perguntas{' '}
          </span>
          frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {FAQList.map(({ question, answer }: FAQProps, value) => (
            <AccordionItem key={value} value={String(value)}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h3 className="font-medium mt-4">
          Ainda tem perguntas?{' '}
          <a
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Entre em contato conosco
          </a>
        </h3>
      </section>
    </>
  );
}
