'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
    <section id="faq" className="p-4">
      <p className="mb-4">Perguntas frequentes</p>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer }: FAQProps, value) => (
          <AccordionItem key={value} value={String(value)}>
            <AccordionTrigger className="text-left">
              <p>{question}</p>
            </AccordionTrigger>

            <AccordionContent>
              <p>{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="pt-4">
        Ainda tem dúvidas?{' '}
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Entre em contato conosco
        </a>
      </p>
    </section>
  );
}
