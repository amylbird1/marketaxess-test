import React from 'react';
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme';
import { ImageGallery } from './components/ImageGallery';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '20px' }}>
        <ImageGallery />
      </div>
    </ThemeProvider>
  );
};

export default App;
