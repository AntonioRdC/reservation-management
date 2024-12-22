'use client';

import * as z from 'zod';
import { useState, useTransition } from 'react';
import { Resource, Space } from '@prisma/client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SpaceFormSchema } from '@/schemas/space-form.schema';

import { DateTimePicker } from '@/app/(app)/spaces/components/date-time-picker';
import { CategorySelector } from '@/app/(app)/spaces/components/category-selector';
import { ResourceSelector } from '@/app/(app)/spaces/components/resource-selector';
import { ImageUploader } from '@/app/(app)/spaces/components/image-uploader';
import { categoryType } from '@/app/(app)/spaces/docs';

import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
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
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { createBooking } from '@/actions/create-booking';

interface SpacesFormProps {
  spaces: Space[];
  resources: Resource[];
}

export default function SpacesForm({ spaces, resources }: SpacesFormProps) {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SpaceFormSchema>>({
    resolver: zodResolver(SpaceFormSchema),
    defaultValues: {
      space: '',
      category: '',
      date: new Date(),
      startTime: '',
      endTime: '',
      resources: [],
      image: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof SpaceFormSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      createBooking(data).then((data) => {
        console.log(data);
      });
    });
  };

  return (
    <Card className="border rounded-none dark:bg-zinc-900">
      <CardHeader>
        <p className="text-xs text-gray-600 my-1">
          Escolha o espaço, o horário...
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Espaço */}
            <FormField
              control={form.control}
              name="space"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipos de espaço</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            {/* Categoria */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <FormControl>
                    <CategorySelector
                      categories={categoryType}
                      selectedCategory={field.value}
                      onSelectedCategory={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            {/* Data e horário */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Horário do agendamento</FormLabel>
                  <FormControl>
                    <DateTimePicker
                      selectedDate={field.value}
                      onSelectDate={field.onChange}
                      selectedStartTime={form.getValues('startTime')}
                      onSelectStartTime={(value) =>
                        form.setValue('startTime', value)
                      }
                      selectedEndTime={form.getValues('endTime')}
                      onSelectEndTime={(value) =>
                        form.setValue('endTime', value)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            {/* Recursos */}
            <FormField
              control={form.control}
              name="resources"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recursos</FormLabel>
                  <FormControl>
                    <ResourceSelector
                      resources={resources}
                      onResourcesChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            {/* Upload de Imagem */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagem</FormLabel>
                  <FormControl>
                    <ImageUploader
                      onImageChange={(image) => field.onChange(image)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              Fazer Agendamento
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
