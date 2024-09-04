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
import { cn } from '@/lib/utils';

interface DateTimePickerProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  selectedTimeRange: string;
  onSelectTimeRange: (timeRange: string) => void;
}

export function DateTimePicker({
  selectedDate,
  onSelectDate,
  selectedTimeRange,
  onSelectTimeRange,
}: DateTimePickerProps) {
  const formatDate = (date: Date | undefined) => {
    return date
      ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
      : 'Escolha uma data';
  };

  const timeRangeOptions = Array.from({ length: 14 }, (_, i) => {
    const startHour = 8 + i;
    const endHour = startHour + 1;
    return `${startHour.toString().padStart(2, '0')}:00 até ${endHour.toString().padStart(2, '0')}:00`;
  });

  return (
    <div className="flex-1">
      <div className="flex gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[240px] pl-3 text-left font-normal',
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
        <Select
          onValueChange={onSelectTimeRange}
          defaultValue={selectedTimeRange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Horário" />
          </SelectTrigger>
          <SelectContent>
            {timeRangeOptions.map((timeRange) => (
              <SelectItem key={timeRange} value={timeRange}>
                {timeRange}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
