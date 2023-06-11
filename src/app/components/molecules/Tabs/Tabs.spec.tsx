import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { AboutTab } from '../../organisms/AboutTab/AboutTab.component';
import { ContactTab } from '../../organisms/ContactTab/ContactTab.component';
import { Tabs } from './Tabs.component';
import styles from './Tabs.module.scss';

test('loads component', () => {
  render(
    <Tabs
      tabs={[{ title: 'Contact', element: <ContactTab key='contact' /> }]}
    />,
  );
  expect(screen.getByRole('group')).toHaveClass(styles.tabs);
  expect(screen.getByRole('main')).toHaveClass(styles.tabContainer);
});

// display correct tab
test('display correct tab', () => {
  render(
    <Tabs
      tabs={[
        { title: 'Contact', element: <ContactTab key='contact' /> },
        { title: 'About', element: <AboutTab key='about' /> },
      ]}
    />,
  );

  // default tab
  expect(screen.getByText('Contact')).toBeInTheDocument();
  expect(screen.getByText('Want to get in touch?')).toBeInTheDocument();

  const aboutTab = screen.getByText('About');
  fireEvent.click(aboutTab);

  expect(screen.getByText('Everything Web Development')).toBeInTheDocument();
});
