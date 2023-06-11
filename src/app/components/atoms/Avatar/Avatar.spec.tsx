import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Avatar } from './Avatar.component';

test('loads component', () => {
  render(<Avatar />);
  expect(screen.getByAltText('Kevin McGrady')).toBeTruthy();
});
