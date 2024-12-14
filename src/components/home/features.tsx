'use client';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  features: Array<string>;
}

const features: FeatureProps[] = [
  {
    title: 'Espaços Disponíveis',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/background.jpg',
    features: ['Salas de Reunião/Trabalho', 'Auditório'],
  },
  {
    title: 'Gerenciamento de Eventos com Even',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/background.jpg',
    features: ['Gestão de Eventos'],
  },
  {
    title: 'Intuitive user interface',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/background.jpg',
    features: ['Projetores', 'Flipcharts'],
  },
];

export function Features() {
  return (
    <>
      <section
        id="features"
        className="flex flex-col justify-center items-center py-6 px-4 gap-4 border-y border-border/40 dark:border-border"
      >
        <div className="flex justify-center items-center text-3xl md:text-4xl lg:text-5xl font-bold">
          <h1>
            <span className="bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Reservas
            </span>{' '}
            e{' '}
            <span className="bg-gradient-to-r from-[#61DAFB] to-[#5FC52E] text-transparent bg-clip-text">
              Ferramentas
            </span>{' '}
            disponíveis
          </h1>
        </div>

        <div className="grid justify-center items-center text-center md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(
            ({ title, description, image, features }: FeatureProps) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle className="">{title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {features.map((feature: string) => (
                      <div key={feature}>
                        <Badge variant="default" className="text-lg">
                          {feature}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  {description}
                </CardContent>

                <CardFooter>
                  <Image
                    src={image}
                    alt="About feature"
                    width={200}
                    height={300}
                    className="mx-auto rounded-lg border"
                  />
                </CardFooter>
              </Card>
            ),
          )}
        </div>
      </section>
    </>
  );
}
