'use client';

import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GiHamburgerMenu } from 'react-icons/gi';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Data {
  name: string | null;
  email: string | null;
  user_image: string | null;
  space: string;
  capacity: number;
  space_description: string | null;
  startTime: Date | string;
  endTime: Date | string;
  booking_image: string | null;
  category: 'PRESENTIAL_COURSE' | 'ONLINE_COURSE' | 'CONSULTANCY' | 'VIDEOS';
  status: 'REQUESTED' | 'CONFIRMED' | 'CANCELLED';
}

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

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return statusTranslations[value] || value;
    },
  },
  {
    accessorKey: 'space',
    header: 'Espaço',
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return categoryTranslations[value] || value;
    },
  },
  {
    accessorKey: 'timeRange',
    header: 'Período',
    cell: ({ row }) => {
      const startTime = row.original.startTime;
      const endTime = row.original.endTime;

      if (!startTime || !endTime) {
        return '';
      }

      const formattedStart = format(new Date(startTime), 'dd/MM/yyyy HH:mm', {
        locale: ptBR,
      });
      const formattedEnd = format(new Date(endTime), 'HH:mm', { locale: ptBR });

      return `${formattedStart} - ${formattedEnd}`;
    },
  },
  {
    id: 'actions',
    header: 'Ações',
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <GiHamburgerMenu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Aprovar agendamento</DropdownMenuItem>
          <DropdownMenuItem>Cancelar agendamento</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

interface DataTableProps {
  data: Data[];
}

export default function DataTable({ data }: DataTableProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const commercialHours = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
  ];

  const offsetInMinutes = new Date().getTimezoneOffset();
  const offsetHours = Math.abs(Math.floor(offsetInMinutes / 60));
  const gmtString =
    `gmt${offsetInMinutes > 0 ? '-' : '+'}${offsetHours.toString().padStart(2, '0')}`.toUpperCase();

  return (
    <div className="flex w-full m-auto px-4 mt-8 gap-4">
      <div className="flex flex-col">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div className="w-full mx-auto mt-1 overflow-hidden">
          {gmtString}
          {commercialHours.map((hour) => (
            <div key={hour} className="flex h-16 items-center">
              {hour}
              <Separator orientation="vertical" className="ml-2" />
              <Separator />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-auto">
        <div className="border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Sem resultados
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
