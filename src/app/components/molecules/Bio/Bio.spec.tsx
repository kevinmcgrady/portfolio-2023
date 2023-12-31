import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { HiCake } from 'react-icons/hi';

import { Bio, BioProps } from './Bio.component';

const props: BioProps = {
  title: 'title',
  subTitle: 'subTitle',
  description: 'description',
  details: [
    {
      text: 'details text',
      icon: HiCake,
    },
    {
      text: 'details text 2',
      icon: HiCake,
      url: 'http://www.google.com',
    },
  ],
};

test('loads component', () => {
  render(<Bio {...props} />);
  expect(screen.getByRole('article')).toBeTruthy();
});

test('displays content', () => {
  render(<Bio {...props} />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('title');
  expect(screen.getByText('subTitle')).toBeTruthy();
  expect(screen.getByText('description')).toBeTruthy();
});

test('displays details', () => {
  render(<Bio {...props} />);
  expect(screen.getByText('details text')).toBeTruthy();
});

test('display link if url exists', () => {
  render(<Bio {...props} />);
  expect(screen.getByRole('link')).toHaveTextContent('details text 2');
});
