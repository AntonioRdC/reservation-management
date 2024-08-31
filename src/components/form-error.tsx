'use client';

import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <Badge
      variant="destructive"
      className="p-3 rounded-md flex items-center justify-center gap-x-2 text-sm"
    >
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </Badge>
  );
}
