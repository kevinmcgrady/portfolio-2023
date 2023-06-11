import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Card } from './Card.component';
import styles from './Card.module.scss';

test('loads component', () => {
  render(
    <Card>
      <p>test</p>
    </Card>,
  );

  expect(screen.getByRole('contentinfo')).toHaveClass(styles.card);
  expect(screen.getByRole('list')).toHaveClass(styles.tagContainer);
});

// has gutter
test('gutter', () => {
  render(
    <Card gutterBottom>
      <p>test</p>
    </Card>,
  );

  expect(screen.getByRole('contentinfo')).toHaveClass(styles.gutter);
});

// location
test('location', () => {
  render(
    <Card location='paisley'>
      <p>test</p>
    </Card>,
  );

  expect(screen.getByText('paisley')).toBeTruthy();
});

// level
test('level', () => {
  render(
    <Card level='award'>
      <p>test</p>
    </Card>,
  );

  expect(screen.getByText('award')).toBeTruthy();
});

//dates
test('dates', () => {
  render(
    <Card dates='2019 - 2022'>
      <p>test</p>
    </Card>,
  );

  expect(screen.getByText('2019 - 2022')).toBeTruthy();
});
