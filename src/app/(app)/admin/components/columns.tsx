import { ArrowUpDown } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import { BookingData } from '@/app/(app)/types';

const categoryTranslations: Record<string, string> = {
  PRESENTIAL_COURSE: 'Curso Presencial',
  ONLINE_COURSE: 'Curso Online',
  CONSULTANCY: 'Consultoria',
  VIDEOS: 'Vídeos',
};

const statusTranslations: Record<string, string> = {
  REQUESTED: 'Em análise',
  CONFIRMED: 'Aprovado',
  CANCELLED: 'Cancelado',
};

export const columns: ColumnDef<BookingData>[] = [
  {
    accessorKey: 'user.name',
    header: 'Nome',
  },
  {
    id: 'email',
    accessorKey: 'user.email',
    header: 'Email',
  },
  {
    accessorKey: 'booking.status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },

    cell: ({ getValue }) => {
      const value = getValue<string>();
      return statusTranslations[value] || value;
    },
  },
  {
    accessorKey: 'space.name',
    header: 'Espaço',
  },
  {
    accessorKey: 'booking.category',
    header: 'Categoria',
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return categoryTranslations[value] || value;
    },
  },
  {
    accessorKey: 'timeRange',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Período do agendamento
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const startTime = row.original.booking.startTime;
      const endTime = row.original.booking.endTime;

      if (!startTime || !endTime) {
        return '';
      }

      const formattedStart = format(new Date(startTime), 'dd/MM/yyyy HH:mm', {
        locale: ptBR,
      });
      const formattedEnd = format(new Date(endTime), 'HH:mm', { locale: ptBR });

      return `${formattedStart} - ${formattedEnd}`;
    },
    sortingFn: (rowA, rowB) => {
      const startTimeA = new Date(rowA.original.booking.startTime);
      const startTimeB = new Date(rowB.original.booking.endTime);

      return startTimeA.getTime() - startTimeB.getTime();
    },
  },
];
