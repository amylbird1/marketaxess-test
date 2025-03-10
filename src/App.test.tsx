/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

jest.mock('./components/ImageGallery', () => ({
  ImageGallery: () => <div>ImageGallery Component</div>,
}));

describe('App', () => {
  test('renders ImageGallery wrapped in ThemeProvider', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );

    expect(screen.getByText('ImageGallery Component')).toBeInTheDocument();
  });
});
