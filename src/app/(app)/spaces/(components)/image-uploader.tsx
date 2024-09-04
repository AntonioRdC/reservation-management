import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface ImageUploaderProps {
  onImageChange: (file: File | null) => void;
}

export function ImageUploader({ onImageChange }: ImageUploaderProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      onImageChange(file);
    } else {
      setSelectedImage(null);
      onImageChange(null);
    }
  };

  return (
    <section className="my-4">
      <Label htmlFor="picture" className="block text-base font-medium mb-1">
        Imagem
      </Label>

      <Input
        id="picture"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-50 file:text-blue-700
        hover:file:bg-blue-100"
      />

      {selectedImage && (
        <p className="text-xs text-gray-600 mt-1">{selectedImage.name}</p>
      )}
    </section>
  );
}
