'use client';

import React, { useState } from 'react';
import { Space } from '@prisma/client';

import { DateTimePicker } from '@/app/(app)/spaces/(components)/date-time-picker';
import { CategorySelector } from '@/app/(app)/spaces/(components)/category-selector';
import { ResourceSelector } from '@/app/(app)/spaces/(components)/resource-selector';
import { ImageUploader } from '@/app/(app)/spaces/(components)/image-uploader';

import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const categoryType = {
  PRESENTIAL_COURSE: 'Curso Presencial',
  ONLINE_COURSE: 'Curso Online',
  CONSULTANCY: 'Consultoria',
  VIDEOS: 'Vídeos',
};

const mockResources = [
  {
    id: '1',
    name: 'Projetor',
    quantity: 10,
  },
  {
    id: '2',
    name: 'Pincel',
    quantity: 20,
  },
  {
    id: '3',
    name: 'Computador',
    quantity: 5,
  },
  {
    id: '4',
    name: 'Microfone',
    quantity: 8,
  },
];

interface SpacesFormProps {
  spaces: Space[];
}

export default function SpacesForm({ spaces }: SpacesFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [selectedTimeRange, setSelectedTimeRange] =
    useState<string>('08:00 até 09:00');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedResources, setSelectedResources] = useState<{
    [key: string]: number;
  }>({});

  const handleResourcesChange = (resources: { [key: string]: number }) => {
    setSelectedResources(resources);
  };

  return (
    <Card className="container mt-8">
      <CardContent>
        {/* Título */}
        <section className="my-4">
          <h2 className="text-3xl font-semibold">Reserva um Espaço</h2>
          <p className="text-xs text-gray-600 my-1">
            Escolha o espaço, o horário...
          </p>
        </section>

        {/* Espaço */}
        <section className="my-4">
          <Label className="block text-base font-medium mb-1">
            Tipos de espaço
          </Label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Escolha um espaço" />
            </SelectTrigger>
            <SelectContent>
              {spaces.map((space) => (
                <SelectItem key={space.id} value={space.id}>
                  {space.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className="text-xs text-gray-600 mt-1">
            Descrição do espaço, capacidade
          </p>
        </section>

        <Separator />

        {/* Categoria do espaço */}
        <section className="my-4">
          <Label className="block text-base font-medium mb-1">Categoria</Label>

          <CategorySelector categories={categoryType} />

          <p className="text-xs text-gray-600 mt-1">Descrição do Categoria</p>
        </section>

        <Separator />

        {/* Data e horário */}
        <section className="my-4">
          <Label className="block text-base font-medium mb-1">
            Horário do agendamento
          </Label>

          <DateTimePicker
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            selectedTimeRange={selectedTimeRange}
            onSelectTimeRange={setSelectedTimeRange}
          />

          <p className="text-xs text-gray-600 mt-1">Descrição do horário</p>
        </section>

        <Separator />

        {/* Recursos */}
        <section className="my-4">
          <Label className="block text-base font-medium mb-1">Recursos</Label>

          <ResourceSelector
            resources={mockResources}
            onResourcesChange={handleResourcesChange}
          />

          <p className="text-xs text-gray-600 mt-1">Descrição dos Recursos</p>
        </section>

        <Separator />

        {/* Upload de Imagem */}
        <section className="my-4">
          <Label htmlFor="picture" className="block text-base font-medium mb-1">
            Imagem
          </Label>

          <ImageUploader onImageChange={setSelectedImage} />

          {selectedImage && (
            <p className="text-xs text-gray-600 mt-1">{selectedImage.name}</p>
          )}
        </section>
      </CardContent>
    </Card>
  );
}
