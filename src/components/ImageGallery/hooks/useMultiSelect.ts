import { useState, useCallback } from 'react';

const useMultiSelect = (images: { id: string }[]) => {
  const [selectedImageIds, setSelectedImageIds] = useState<Set<string>>(new Set());
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);

  const handleSelect = useCallback((id: string) => {
    setSelectedImageIds((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  }, []);

  const handleToggleMultiSelect = useCallback(() => {
    setEnableMultiSelect((prev) => !prev);
    setSelectedImageIds(new Set()); // Clears selection when toggling
  }, []);

  const handleClearSelection = useCallback(() => {
    setSelectedImageIds(new Set());
  }, []);

  const handleSelectAll = useCallback(() => {
    const allImageIds = new Set<string>(images.map((image) => image.id));
    setSelectedImageIds(allImageIds);
  }, [images]);

  return {
    selectedImageIds,
    setSelectedImageIds,
    enableMultiSelect,
    handleSelect,
    handleToggleMultiSelect,
    handleClearSelection,
    handleSelectAll,
  };
};

export default useMultiSelect;
