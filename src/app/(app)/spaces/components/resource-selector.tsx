import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

interface Resource {
  id: string;
  name: string;
  quantity: number;
}

interface SelectedResource {
  id: string;
  name: string;
  quantity: number;
}

interface ResourceSelectorProps {
  resources: Resource[];
  onResourcesChange: (selectedResources: SelectedResource[]) => void;
}

export function ResourceSelector({
  resources,
  onResourcesChange,
}: ResourceSelectorProps) {
  const [selectedResources, setSelectedResources] = useState<
    SelectedResource[]
  >([]);

  const handleCheckboxChange = (resource: Resource) => {
    const isChecked = selectedResources.some((res) => res.id === resource.id);

    if (isChecked) {
      const updatedResources = selectedResources.filter(
        (res) => res.id !== resource.id,
      );
      setSelectedResources(updatedResources);
      onResourcesChange(updatedResources);
    } else {
      const updatedResources = [
        ...selectedResources,
        { id: resource.id, name: resource.name, quantity: 1 },
      ];
      setSelectedResources(updatedResources);
      onResourcesChange(updatedResources);
    }
  };

  const handleQuantityChange = (resourceId: string, quantity: number) => {
    const updatedResources = selectedResources.map((res) =>
      res.id === resourceId ? { ...res, quantity } : res,
    );
    setSelectedResources(updatedResources);
    onResourcesChange(updatedResources);
  };

  return (
    <>
      {resources.map((resource) => {
        const isChecked = selectedResources.some(
          (res) => res.id === resource.id,
        );
        const selectedResource = selectedResources.find(
          (res) => res.id === resource.id,
        );

        return (
          <div key={resource.id} className="flex items-center mb-2">
            <Checkbox
              id={`checkbox-${resource.id}`}
              checked={isChecked}
              onCheckedChange={() => handleCheckboxChange(resource)}
              className="mr-2 h-6 w-6"
            />
            <Label
              htmlFor={`checkbox-${resource.id}`}
              className="w-1/3 font-normal"
            >
              {resource.name}
            </Label>
            {isChecked && (
              <>
                <Input
                  type="number"
                  min="1"
                  max={resource.quantity}
                  value={selectedResource?.quantity || 1}
                  onChange={(e) =>
                    handleQuantityChange(resource.id, Number(e.target.value))
                  }
                  className="w-16 h-6 p-1"
                />
                <span className="ml-2 text-base text-gray-500">
                  / {resource.quantity} disponíveis
                </span>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
