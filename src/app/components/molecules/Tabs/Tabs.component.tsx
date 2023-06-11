'use client';

import cn from 'classnames';
import { useState } from 'react';

import { Typography } from '@/components/atoms/Typography/Typography.component';

import styles from './Tabs.module.scss';

type Tab = {
  title: string;
  element: JSX.Element;
};
type TabsProps = {
  tabs: Tab[];
};

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].title);

  const handleSelectedTab = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((tab) => {
          const activeTab = tab.title === selectedTab;
          return (
            <Typography
              key={tab.title}
              onClick={() => handleSelectedTab(tab.title)}
              color={activeTab ? 'primary' : 'secondary'}
              className={cn(styles.tab, activeTab && styles.active)}
              isBold
            >
              {tab.title}
            </Typography>
          );
        })}
      </div>
      <div className={styles.tabContainer}>
        {tabs
          .filter((tab) => tab.title === selectedTab)
          .map((tab) => tab.element)}
      </div>
    </div>
  );
};
