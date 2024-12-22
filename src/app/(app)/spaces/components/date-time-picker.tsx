import React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { timeOptions } from '@/app/(app)/spaces/docs';
import { cn } from '@/lib/utils';

interface DateTimePickerProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  selectedStartTime: string;
  onSelectStartTime: (startTime: string) => void;
  selectedEndTime: string;
  onSelectEndTime: (endTime: string) => void;
}

export function DateTimePicker({
  selectedDate,
  onSelectDate,
  selectedStartTime,
  onSelectStartTime,
  selectedEndTime,
  onSelectEndTime,
}: DateTimePickerProps) {
  const formatDate = (date: Date | undefined) => {
    return date
      ? format(date, "EEEE, dd 'de' MMMM", { locale: ptBR })
      : 'Escolha uma data';
  };

  return (
    <div className="flex flex-col gap-2 items-center md:flex-row">
      {/* Data */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'pl-3 text-left font-normal',
              !selectedDate && 'text-muted-foreground',
            )}
          >
            {formatDate(selectedDate)}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onSelectDate}
            disabled={(date) => date < new Date()}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Hora de início */}
      <Select
        onValueChange={onSelectStartTime}
        defaultValue={selectedStartTime}
      >
        <SelectTrigger>
          <SelectValue placeholder="Início" />
        </SelectTrigger>
        <SelectContent>
          {timeOptions.map((time) => (
            <SelectItem key={time} value={time}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <span className="text-gray-500">-</span>

      {/* Hora de fim */}
      <Select onValueChange={onSelectEndTime} defaultValue={selectedEndTime}>
        <SelectTrigger>
          <SelectValue placeholder="Fim" />
        </SelectTrigger>
        <SelectContent>
          {timeOptions.map((time) => (
            <SelectItem key={time} value={time}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
