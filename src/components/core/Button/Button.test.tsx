/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

describe('Button Component', () => {
  test('renders the button with the correct label', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button label="Click Me" onClick={jest.fn()} />
      </ThemeProvider>
    );
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick when the button is clicked', () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button label="Click Me" onClick={onClick} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when the button is disabled', () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button label="Click Me" onClick={onClick} disabled={true} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test('displays the button in a disabled state when disabled prop is passed', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button label="Click Me" onClick={jest.fn()} disabled={true} />
      </ThemeProvider>
    );
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });
});
