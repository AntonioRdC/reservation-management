import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface CategorySelectorProps {
  categories: { [key: string]: string };
  selectedCategory: string;
  onSelectedCategory: (category: string) => void;
}

export function CategorySelector({
  categories,
  selectedCategory,
  onSelectedCategory,
}: CategorySelectorProps) {
  return (
    <RadioGroup
      value={selectedCategory}
      onValueChange={onSelectedCategory}
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
