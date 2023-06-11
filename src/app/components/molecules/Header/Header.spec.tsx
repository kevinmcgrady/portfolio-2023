import { render, screen } from '@testing-library/react';

import { Header } from './Header.component';
import styles from './Header.module.scss';

test('loads component', () => {
  render(<Header />);
  expect(screen.getByRole('img')).toBeTruthy();
  expect(screen.getByRole('img')).toHaveClass(styles.header);
});
