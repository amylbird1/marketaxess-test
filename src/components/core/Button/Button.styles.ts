import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'colour'
})<Omit<ButtonProps, 'label'>>`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colours.text};
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight};
  width: 140px;  // Default width for larger screens
  cursor: pointer;
  background-color: ${(props) =>
    props.colour === 'primary' ? props.theme.colours.primary : props.theme.colours.secondary};
  transition: background-color 0.3s;
  margin: 0 5px;

  &:hover {
    background-color: ${(props) =>
      props.colour === 'primary' ? props.theme.colours.primaryHover : props.theme.colours.secondaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colours.disabled};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;
