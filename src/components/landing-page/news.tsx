'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SeparatorComponents } from '@/components/separator-components';

interface NewsProps {
  title: string;
  image: string;
}

const news: NewsProps[] = [
  {
    title: 'Espaços Disponíveis',
    image: '/background.jpg',
  },
  {
    title: 'Espaços Disponíveis',
    image: '/background.jpg',
  },
  {
    title: 'Espaços Disponíveis',
    image: '/background.jpg',
  },
  {
    title: 'Espaços Disponíveis',
    image: '/background.jpg',
  },
];

export function News() {
  return (
    <>
      <SeparatorComponents />
      <section id="news" className="flex flex-col justify-center items-center">
        <Carousel
          opts={{
            align: 'center',
          }}
          className="w-[90%]"
        >
          <CarouselContent className="flex">
            {news.map(({ title, image }, index) => (
              <CarouselItem
                key={index}
                className="flex-none md:w-1/2 lg:w-1/3 relative"
              >
                <Card className="w-full relative">
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={200}
                    className="object-cover rounded-lg w-full h-full"
                  />
                  <CardContent className="absolute inset-0 flex flex-col items-start justify-start text-start">
                    <h3 className="text-xl font-semibold mb-4 text-black">
                      {title}
                    </h3>
                    <Button className="mt-auto p-5 text-lg">
                      Mostrar Tudo
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}
