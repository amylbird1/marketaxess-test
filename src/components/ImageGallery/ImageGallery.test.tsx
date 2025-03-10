/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react';
import ImageGallery from './ImageGallery';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

jest.mock('./hooks/useImageGallery', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ImageGallery', () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    jest.mocked(require('./hooks/useImageGallery')).default.mockImplementation(() => ({
      images: [
        { id: '1', url: 'image1.jpg' },
        { id: '2', url: 'image2.jpg' },
      ],
      isPending: false,
      selectedImageIds: new Set(),
      enableMultiSelect: false,
      handleSelect: jest.fn(),
      handleToggleMultiSelect: jest.fn(),
      handleDeleteSelected: jest.fn(),
      handleClearSelection: jest.fn(),
      handleSelectAll: jest.fn(),
      handleLoadMoreClick: jest.fn(),
    }));
  });

  test('renders images and buttons', () => {
    render(
      <ThemeProvider theme={theme}>
        <ImageGallery />
      </ThemeProvider>
    );

    expect(screen.getByAltText('Image 0')).toBeInTheDocument();
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument();
  });

  test('renders action buttons when multi-select is enabled', () => {
    jest.mocked(require('./hooks/useImageGallery')).default.mockImplementation(() => ({
      images: [
        { id: '1', url: 'image1.jpg' },
        { id: '2', url: 'image2.jpg' },
      ],
      isPending: false,
      selectedImageIds: new Set(),
      enableMultiSelect: true,
      handleSelect: jest.fn(),
      handleToggleMultiSelect: jest.fn(),
      handleDeleteSelected: jest.fn(),
      handleClearSelection: jest.fn(),
      handleSelectAll: jest.fn(),
      handleLoadMoreClick: jest.fn(),
    }));

    render(
      <ThemeProvider theme={theme}>
        <ImageGallery />
      </ThemeProvider>
    );

    expect(screen.getByRole('button', { name: /delete \(0\)/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument();
  });

  test('calls handleLoadMoreClick when Load More button is clicked', () => {
    const handleLoadMoreClick = jest.fn();
    jest.mocked(require('./hooks/useImageGallery')).default.mockImplementation(() => ({
      images: [
        { id: '1', url: 'image1.jpg' },
        { id: '2', url: 'image2.jpg' },
      ],
      isPending: false,
      selectedImageIds: new Set(),
      enableMultiSelect: false,
      handleSelect: jest.fn(),
      handleToggleMultiSelect: jest.fn(),
      handleDeleteSelected: jest.fn(),
      handleClearSelection: jest.fn(),
      handleSelectAll: jest.fn(),
      handleLoadMoreClick,
    }));

    render(
      <ThemeProvider theme={theme}>
        <ImageGallery />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /load more/i }));
    expect(handleLoadMoreClick).toHaveBeenCalledTimes(1);
  });
});
