'use client';

import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ArrowUpDown } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
    sortingFn: (rowA, rowB) => {
      const startTimeA = new Date(rowA.original.startTime);
      const startTimeB = new Date(rowB.original.startTime);

      return startTimeA.getTime() - startTimeB.getTime();
    },
  },
  {
    id: 'actions',
    header: 'Ações',
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Abrir ações</span>
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
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnFilters,
      sorting,
    },
  });

  return (
    <div className="flex w-full m-auto px-4 mt-8 gap-4">
      <div className="flex-auto">
        <div className="border">
          <div className="flex items-center py-4 mx-4">
            <Input
              placeholder="Filtrar por email"
              value={
                (table.getColumn('email')?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table.getColumn('email')?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
          </div>
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
