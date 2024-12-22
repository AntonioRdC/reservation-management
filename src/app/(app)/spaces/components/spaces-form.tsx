'use client';

import React, { useState, useTransition } from 'react';
import { Resource, Space } from '@prisma/client';

import { DateTimePicker } from '@/app/(app)/spaces/components/date-time-picker';
import { CategorySelector } from '@/app/(app)/spaces/components/category-selector';
import { ResourceSelector } from '@/app/(app)/spaces/components/resource-selector';
import { ImageUploader } from '@/app/(app)/spaces/components/image-uploader';
import { categoryType } from '@/app/(app)/spaces/docs';

import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

interface SpacesFormProps {
  spaces: Space[];
  resources: Resource[];
}

export default function SpacesForm({ spaces, resources }: SpacesFormProps) {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const [selectedSpace, setselectedSpace] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [selectedStartTime, setSelectStartTime] = useState<string>('06:00 AM');
  const [selectedEndTime, setSelectEndTime] = useState<string>('10:00 PM');
  const [selectedResources, setSelectedResources] = useState<{
    [key: string]: number;
  }>({});
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleResourcesChange = (resources: { [key: string]: number }) => {
    setSelectedResources(resources);
  };

  return (
    <Card className="border rounded-none dark:bg-zinc-900">
      <CardHeader>
        <p className="text-xs text-gray-600 my-1">
          Escolha o espaço, o horário...
        </p>
      </CardHeader>
      <CardContent>
        {/* Espaço */}
        <section className="my-4">
          <Label className="block text-base font-medium mb-1">
            Tipos de espaço
          </Label>

          <Select onValueChange={setselectedSpace} defaultValue={selectedSpace}>
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

          <CategorySelector
            categories={categoryType}
            selectedCategory={selectedCategory}
            onSelectedCategory={setSelectedCategory}
          />

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
            selectedStartTime={selectedStartTime}
            onSelectStartTime={setSelectStartTime}
            selectedEndTime={selectedEndTime}
            onSelectEndTime={setSelectEndTime}
          />

          <p className="text-xs text-gray-600 mt-1">Descrição do horário</p>
        </section>

        <Separator />

        {/* Recursos */}
        <section className="my-4">
          <Label className="block text-base font-medium mb-1">Recursos</Label>

          <ResourceSelector
            resources={resources}
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
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button disabled={isPending} type="submit" className="w-full">
          Fazer Agendamento
        </Button>
      </CardContent>
    </Card>
  );
}
