import { useCallback } from 'react';
import useFetchImages from './useFetchImages';
import useMultiSelect from './useMultiSelect';

const useImageGallery = () => {
  const { images, fetchImages, isPending, deleteImages } = useFetchImages({ replace: false });

  const {
    selectedImageIds,
    setSelectedImageIds,
    enableMultiSelect,
    handleSelect,
    handleToggleMultiSelect,
    handleClearSelection,
    handleSelectAll,
  } = useMultiSelect(images);;

  const handleLoadMoreClick = useCallback(() => {
    fetchImages();
  }, [fetchImages]);

  const handleDeleteSelected = useCallback(() => {
    deleteImages(selectedImageIds);
    setSelectedImageIds(new Set())
  }, [deleteImages, selectedImageIds, setSelectedImageIds]);

  return {
    images,
    isPending,
    selectedImageIds,
    enableMultiSelect,
    handleSelect,
    handleToggleMultiSelect,
    handleDeleteSelected,
    handleClearSelection,
    handleSelectAll,
    handleLoadMoreClick,
  };
};

export default useImageGallery;
