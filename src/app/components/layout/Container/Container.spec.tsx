import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Container } from './Container.component';
import styles from './Container.module.scss';

test('loads component', () => {
  render(
    <Container>
      <p>test</p>
      <p>test</p>
    </Container>,
  );

  expect(screen.getByRole('main')).toBeTruthy();
});

test('isNarrow', () => {
  render(
    <Container isNarrow>
      <p>test</p>
      <p>test</p>
    </Container>,
  );

  expect(screen.getByRole('main')).toHaveClass(styles.isNarrow);
});
