import cn from 'classnames';
import { JSXElementConstructor } from 'react';

import { Typography } from '@/components/atoms/Typography/Typography.component';

import styles from './Bio.module.scss';

type Details = {
  text: string;
  icon: JSXElementConstructor<any>;
};

type BioProps = {
  title: string;
  description: string;
  subTitle: string;
  details: Details[];
};

export const Bio: React.FC<BioProps> = ({
  title,
  description,
  subTitle,
  details = [],
}) => {
  return (
    <div>
      <Typography variant='title'>{title}</Typography>
      <Typography>{subTitle}</Typography>
      <Typography>{description}</Typography>
      <div className={cn(styles.grid, styles.bio)}>
        {details.map((detail) => (
          <div key={detail.text} className={styles.iconContainer}>
            <detail.icon className={styles.icon} />
            <Typography color='secondary'>{detail.text}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
