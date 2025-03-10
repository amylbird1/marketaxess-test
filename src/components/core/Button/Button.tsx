import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
  label: string;
  colour?: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, colour = 'primary', onClick, disabled }) => {
  return (
    <StyledButton colour={colour} onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default React.memo(Button);
