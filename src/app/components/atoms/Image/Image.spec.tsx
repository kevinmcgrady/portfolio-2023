import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Image } from './Image.component';
import styles from './Image.module.scss';

test('loads component', () => {
  render(<Image src='/image.jpg' alt='alt' width={10} height={10} />);
  expect(screen.getByAltText('alt')).toBeInTheDocument();
  expect(screen.getByAltText('alt')).toHaveClass(styles.image);
});
