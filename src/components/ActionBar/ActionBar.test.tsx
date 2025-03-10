/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import ActionBar from './ActionBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';


describe('ActionBar Component', () => {
  test('renders children content', () => {
    render(
      <ThemeProvider theme={theme}>
        <ActionBar position="top" contentAlignment="center">
          <button>Click Me</button>
        </ActionBar>
      </ThemeProvider>
    );
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('applies contentAlignment "center"', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ActionBar position="top" contentAlignment="center">
          <button>Click Me</button>
        </ActionBar>
      </ThemeProvider>
    );
    const actionBar = container.firstChild as HTMLElement;
    expect(actionBar).toHaveStyle('justify-content: center');
  });

  test('applies contentAlignment "flex-start"', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ActionBar position="top" contentAlignment="flex-start">
          <button>Click Me</button>
        </ActionBar>
      </ThemeProvider>
    );
    const actionBar = container.firstChild as HTMLElement;
    expect(actionBar).toHaveStyle('justify-content: flex-start');
  });

  test('applies contentAlignment "flex-end"', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ActionBar position="top" contentAlignment="flex-end">
          <button>Click Me</button>
        </ActionBar>
      </ThemeProvider>
    );
    const actionBar = container.firstChild as HTMLElement;
    expect(actionBar).toHaveStyle('justify-content: flex-end');
  });

  test('applies contentAlignment "space-between"', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ActionBar position="top" contentAlignment="space-between">
          <button>Click Me</button>
        </ActionBar>
      </ThemeProvider>
    );
    const actionBar = container.firstChild as HTMLElement;
    expect(actionBar).toHaveStyle('justify-content: space-between');
  });

  test('applies contentAlignment "justify-content"', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ActionBar position="top" contentAlignment="justify-content">
          <button>Click Me</button>
        </ActionBar>
      </ThemeProvider>
    );
    const actionBar = container.firstChild as HTMLElement;
    expect(actionBar).toHaveStyle('justify-content: justify-content');
  });
});
