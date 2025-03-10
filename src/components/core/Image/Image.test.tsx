/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react';
import Image from './Image';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

describe('Image Component', () => {
  test('renders image with correct src and alt', () => {
    render(
      <ThemeProvider theme={theme}>
        <Image id="1" src="image.jpg" alt="Image 1" showCheckbox={false} selected={false} onSelect={jest.fn()} />
      </ThemeProvider>
    );
    const image = screen.getByAltText('Image 1');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  test('renders checkbox when showCheckbox is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Image id="1" src="image.jpg" alt="Image 1" showCheckbox={true} selected={false} onSelect={jest.fn()} />
      </ThemeProvider>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('checkbox is checked when selected is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Image id="1" src="image.jpg" alt="Image 1" showCheckbox={true} selected={true} onSelect={jest.fn()} />
      </ThemeProvider>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('checkbox is unchecked when selected is false', () => {
    render(
      <ThemeProvider theme={theme}>
        <Image id="1" src="image.jpg" alt="Image 1" showCheckbox={true} selected={false} onSelect={jest.fn()} />
      </ThemeProvider>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('calls onSelect when checkbox is clicked', () => {
    const onSelect = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Image id="1" src="image.jpg" alt="Image 1" showCheckbox={true} selected={false} onSelect={onSelect} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith('1');
  });
});
