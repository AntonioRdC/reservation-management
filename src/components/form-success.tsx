'use client';

import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';

interface FormSuccessProps {
  message?: string;
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;

  return (
    <Badge
      variant="default"
      className="p-3 rounded-md flex items-center justify-center gap-x-2 text-sm bg-emerald-800 hover:bg-emerald-800/80"
    >
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </Badge>
  );
}
