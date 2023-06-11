import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Navigation } from './Navigation.component';
import styles from './Navigation.module.scss';

test('loads component', () => {
  render(<Navigation />);
  expect(screen.getByRole('navigation')).toBeTruthy();
  expect(screen.getByRole('navigation')).toHaveClass(styles.nav);
});

// toggle button
test('toggle button', () => {
  const setState = jest.fn();
  const initialState = 'dark';

  const useStateMock: any = () => [initialState, setState];

  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  render(<Navigation />);
  expect(screen.getByRole('button')).toBeTruthy();
  expect(screen.getByRole('button')).toHaveClass(styles.iconContainer);

  const button = screen.getByRole('button');

  act(() => fireEvent.click(button));
  expect(setState).toBeCalledWith('light');
});

// toggle button
test('toggle button', () => {
  const setState = jest.fn();
  const initialState = 'light';

  const useStateMock: any = () => [initialState, setState];

  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  render(<Navigation />);
  expect(screen.getByRole('button')).toBeTruthy();
  expect(screen.getByRole('button')).toHaveClass(styles.iconContainer);

  const button = screen.getByRole('button');

  act(() => fireEvent.click(button));
  expect(setState).toBeCalledWith('dark');
});
