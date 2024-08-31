'use client';

import React, { useState } from 'react';
import { Space } from '@prisma/client';

import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DateTimePicker } from '@/app/(app)/spaces/(components)/date-time-picker';

interface SpacesFormProps {
  spaces: Space[];
}

export default function SpacesForm({ spaces }: SpacesFormProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = useState<string>('08:00');
  const [endTime, setEndTime] = useState<string>('22:00');

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

        {/* Escolha de espaços */}
        <section className="mb-4">
          <Label className="block text-base font-medium mb-1">
            Tipo de espaços
          </Label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Escolher um espaço" />
            </SelectTrigger>
            <SelectContent>
              {spaces.map((space) => (
                <SelectItem key={space.id} value={space.id}>
                  {space.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className="text-xs text-gray-600 mt-1">Descrição do espaço</p>
        </section>

        {/* Escolha de horário */}
        <section className="mb-4">
          <Label className="block text-base font-medium mb-1">
            Horários de Agendamento
          </Label>

          <div className="flex gap-4">
            <div className="flex-1">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Início
              </Label>
              <DateTimePicker
                label="Fim"
                selectedDate={endDate}
                onSelectDate={setEndDate}
                selectedTime={endTime}
                onSelectTime={setEndTime}
              />
            </div>

            <div className="flex-1">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Fim
              </Label>
              <DateTimePicker
                label="Fim"
                selectedDate={endDate}
                onSelectDate={setEndDate}
                selectedTime={endTime}
                onSelectTime={setEndTime}
              />
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-1">Descrição do horário</p>
        </section>
      </CardContent>
    </Card>
  );
}
