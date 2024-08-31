import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface CategorySelectorProps {
  categories: { [key: string]: string };
}

export function CategorySelector({ categories }: CategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <section className="mb-4">
      <Label className="block text-base font-medium mb-1">Categoria</Label>
      <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
        {Object.entries(categories).map(([key, value]) => (
          <div key={key} className="flex items-center mb-2">
            <RadioGroupItem value={key} id={key} />
            <Label htmlFor={key} className="ml-2 font-normal">
              {value}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </section>
  );
}
