import styled from 'styled-components';
import { ActionBarProps } from './ActionBar';

export const ActionBarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'contentAlignment' && prop !== 'position'
})<Pick<ActionBarProps, 'position' | 'contentAlignment'>>`
  position: fixed;
  ${({ position }) => (position === 'top' ? 'top: 0;' : 'bottom: 0;')}
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: ${({ contentAlignment }) => contentAlignment};
  align-items: center;
  background-color: ${({ theme }) => theme.colours.background};
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
    justify-content: ${({ contentAlignment }) => contentAlignment};
    align-items: ${({ contentAlignment }) => contentAlignment};
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;