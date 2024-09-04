import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface CategorySelectorProps {
  categories: { [key: string]: string };
}

export function CategorySelector({ categories }: CategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <RadioGroup
      value={selectedCategory}
      onValueChange={setSelectedCategory}
      className="space-y-2"
    >
      {Object.entries(categories).map(([key, value]) => (
        <div key={key} className="flex items-center mb-2">
          <RadioGroupItem value={key} id={key} className="h-6 w-6" />
          <Label htmlFor={key} className="ml-2 font-normal">
            {value}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
