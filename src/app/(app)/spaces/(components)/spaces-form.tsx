'use client';

import React, { useState } from 'react';
import { Space } from '@prisma/client';

import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DateTimePicker } from '@/app/(app)/spaces/(components)/date-time-picker';
import { CategorySelector } from '@/app/(app)/spaces/(components)/category-selector';
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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
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
        <section className="mb-4">
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

        {/* Categoria do espaço */}
        <CategorySelector categories={categoryType} />

        {/* Data e horário */}
        <section className="mb-4">
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

        {/* Upload de Imagem */}
        <section className="mb-4">
          <Label className="block text-base font-medium mb-1">Imagem</Label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          />
          {selectedImage && (
            <p className="text-xs text-gray-600 mt-1">Descrição da imagem</p>
          )}
        </section>
      </CardContent>
    </Card>
  );
}
