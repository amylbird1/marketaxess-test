import styled from 'styled-components';
import { StyledImageProps } from './Image';

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }
`;

export const StyledImage = styled.img<StyledImageProps>`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
     width: 100%;
    padding: 5px;
  }
`;

export const CheckBox = styled.input`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 20px;
  width: 20px;
  z-index: 10;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid black;

  @media (max-width: 768px) {
    top: 5px;
    left: 5px;
    height: 25px;
    width: 25px;
  }
`;

