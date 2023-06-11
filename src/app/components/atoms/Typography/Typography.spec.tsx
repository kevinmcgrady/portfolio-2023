import '@testing-library/jest-dom';

import { fireEvent,render, screen } from '@testing-library/react';

import { Typography } from './Typography.component';
import styles from './Typography.module.scss';

test('loads component', () => {
  render(<Typography>Hello</Typography>);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});

// Variants
test('title', () => {
  render(<Typography variant='title'>Title</Typography>);
  expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
  expect(screen.getByRole('heading')).toHaveClass(styles.title);
});

test('subtitle', () => {
  render(<Typography variant='subTitle'>SubTitle</Typography>);
  expect(screen.getByRole('heading', { level: 2 })).toBeTruthy();
  expect(screen.getByRole('heading')).toHaveClass(styles.subTitle);
});

test('body', () => {
  render(<Typography>Body</Typography>);
  expect(screen.getByText('Body')).toBeTruthy();
  expect(screen.getByText('Body')).toHaveClass(styles.body);
});

test('tag', () => {
  render(<Typography variant='tag'>Tag</Typography>);
  expect(screen.getByText('Tag')).toBeTruthy();
  expect(screen.getByText('Tag')).toHaveClass(styles.tag);
});

// Colors
test('primary', () => {
  render(<Typography variant='title'>Primary</Typography>);
  expect(screen.getByRole('heading', { level: 1 })).toHaveClass(styles.primary);
});

test('secondary', () => {
  render(
    <Typography variant='title' color='secondary'>
      Secondary
    </Typography>,
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveClass(
    styles.secondary,
  );
});

test('accent', () => {
  render(
    <Typography variant='title' color='accent'>
      Secondary
    </Typography>,
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveClass(styles.accent);
});

// IsBold
test('isBold', () => {
  render(
    <Typography variant='subTitle' isBold>
      Secondary
    </Typography>,
  );
  expect(screen.getByRole('heading', { level: 2 })).toHaveClass(styles.isBold);
});

test('isBold', () => {
  render(
    <Typography variant='title' isBold>
      Secondary
    </Typography>,
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveClass(styles.isBold);
});

// Classname
test('classname', () => {
  render(
    <Typography variant='title' className='test-class'>
      Secondary
    </Typography>,
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveClass('test-class');
});

// Onclick
test('onClick', () => {
  const handleClick = jest.fn();

  render(
    <Typography variant='title' onClick={handleClick}>
      Secondary
    </Typography>,
  );

  const clickable = screen.getByRole('heading', { level: 1 });
  fireEvent.click(clickable);

  expect(handleClick).toBeCalledTimes(1);
});
