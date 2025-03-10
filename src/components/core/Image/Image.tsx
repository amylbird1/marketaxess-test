import React, { useCallback } from 'react';
import { ImageContainer, StyledImage, CheckBox } from './Image.styles';

export interface ImageProps extends StyledImageProps {
  showCheckbox: boolean;
  selected: boolean;
  onSelect: (id: string) => void;
}

export interface StyledImageProps { 
  id: string;
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ id, src, alt, showCheckbox, selected, onSelect }) => {
  const handleCheckboxSelect = useCallback(() => {
    if (showCheckbox) {
      onSelect(id)
    }
  }, [id, onSelect, showCheckbox])

  return (
    <ImageContainer>
      <StyledImage
        id={id}
        src={src}
        alt={alt}
        loading="lazy"
        onClick={handleCheckboxSelect}
      />
      {showCheckbox && (
        <CheckBox
          type="checkbox"
          checked={selected}
          onChange={handleCheckboxSelect}
        />
      )}
     </ImageContainer>
  );
};

export default React.memo(Image);
