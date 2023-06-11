import { render, screen } from '@testing-library/react';
import { Link } from './Link.component';
import styles from './Link.module.scss';

test('loads component', () => {
  render(<Link href='www.google.com'>link</Link>);
  expect(screen.getByRole('link')).toBeTruthy();
  expect(screen.getByRole('link')).toHaveClass(styles.link);
});
