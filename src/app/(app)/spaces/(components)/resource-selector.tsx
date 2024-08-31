import React, { useState } from 'react';
import { Label } from '@/components/ui/label';

interface Resource {
  id: string;
  name: string;
  quantity: number;
}

interface ResourceSelectorProps {
  resources: Resource[];
  onResourcesChange: (selectedResources: { [key: string]: number }) => void;
}

export function ResourceSelector({
  resources,
  onResourcesChange,
}: ResourceSelectorProps) {
  const [selectedResources, setSelectedResources] = useState<{
    [key: string]: number;
  }>({});
  const [checkedResources, setCheckedResources] = useState<{
    [key: string]: boolean;
  }>({});

  const handleResourceChange = (resourceId: string, quantity: number) => {
    const updatedResources = {
      ...selectedResources,
      [resourceId]: quantity,
    };
    setSelectedResources(updatedResources);
    onResourcesChange(updatedResources);
  };

  const handleCheckboxChange = (resourceId: string) => {
    const updatedCheckedResources = {
      ...checkedResources,
      [resourceId]: !checkedResources[resourceId],
    };
    setCheckedResources(updatedCheckedResources);

    if (!updatedCheckedResources[resourceId]) {
      const updatedResources = { ...selectedResources };
      delete updatedResources[resourceId];
      setSelectedResources(updatedResources);
      onResourcesChange(updatedResources);
    }
  };

  return (
    <>
      {resources.map((resource) => (
        <div key={resource.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={`checkbox-${resource.id}`}
            checked={checkedResources[resource.id] || false}
            onChange={() => handleCheckboxChange(resource.id)}
            className="mr-2"
          />
          <Label className="w-1/3 font-normal">{resource.name}</Label>
          {checkedResources[resource.id] && (
            <>
              <input
                type="number"
                min="0"
                max={resource.quantity}
                value={selectedResources[resource.id] || 0}
                onChange={(e) =>
                  handleResourceChange(resource.id, Number(e.target.value))
                }
                className="w-16 p-1 border border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-500">
                / {resource.quantity} disponíveis
              </span>
            </>
          )}
        </div>
      ))}
    </>
  );
}
