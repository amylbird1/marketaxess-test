import React, { ReactNode } from 'react';
import { ActionBarContainer } from './ActionBar.styles';

export interface ActionBarProps {
    children: ReactNode;
    position: 'top' | 'bottom';
    contentAlignment: 'center' | 'flex-start' | 'flex-end' | 'justify-content' | 'space-between';
  }

const ActionBar: React.FC<ActionBarProps> = ({ children, position, contentAlignment }) => {
  return (
    <ActionBarContainer position={position} contentAlignment={contentAlignment}>
        {children}
    </ActionBarContainer>
  );
};

export default React.memo(ActionBar);
