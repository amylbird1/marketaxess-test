import React from 'react';
import { Button } from '../core/Button';
import { Image } from '../core/Image';
import { ActionBar } from '../ActionBar';
import useImageGallery from './hooks/useImageGallery';
import { ImageGalleryContainer, ImageItem } from './ImageGallery.styles';
import { ButtonContainer } from '../ActionBar/ActionBar.styles';

const ImageGallery: React.FC = () => {
  const {
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
  } = useImageGallery();

  return (
    <div>
      <ActionBar position='top' contentAlignment='space-between'>
        <h3>MarcatAxess</h3>
        <ButtonContainer>
          {enableMultiSelect && (
            <>
              <Button label={`Delete (${selectedImageIds.size})`} disabled={selectedImageIds.size === 0} onClick={handleDeleteSelected} />
              <Button label="Clear" disabled={selectedImageIds.size === 0} onClick={handleClearSelection} />
              <Button label="Select All" disabled={selectedImageIds.size === images.length} onClick={handleSelectAll} />
            </>
          )}
         <Button label={!enableMultiSelect ? 'Delete' : 'Done'} onClick={handleToggleMultiSelect} />
        </ButtonContainer>
      </ActionBar>
      <ImageGalleryContainer>
        {images.map((image, index) => (
          <ImageItem key={index}>
            <Image
              id={image.id}
              src={image.url}
              alt={`Image ${index}`}
              showCheckbox={enableMultiSelect}
              selected={selectedImageIds.has(image.id)}
              onSelect={handleSelect}
            />
          </ImageItem>
        ))}
      </ImageGalleryContainer>
      <ActionBar position='bottom' contentAlignment='center'>
        <Button label="Load More" disabled={isPending} onClick={handleLoadMoreClick} />
      </ActionBar>
    </div>
  );
};

export default React.memo(ImageGallery);
