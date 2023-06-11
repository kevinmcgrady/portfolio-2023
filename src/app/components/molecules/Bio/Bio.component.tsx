import cn from 'classnames';
import { JSXElementConstructor } from 'react';

import { Typography } from '@/components/atoms/Typography/Typography.component';

import { Link } from '../Link/Link.component';
import styles from './Bio.module.scss';

type Details = {
  text: string;
  icon: JSXElementConstructor<any>;
  url?: string;
};

export type BioProps = {
  title: string;
  description: string;
  subTitle: string;
  details: Details[];
};

export const Bio: React.FC<BioProps> = ({
  title,
  description,
  subTitle,
  details,
}) => {
  return (
    <div role='article'>
      <Typography variant='title'>{title}</Typography>
      <Typography>{subTitle}</Typography>
      <Typography>{description}</Typography>
      <div className={cn(styles.grid, styles.bio)}>
        {details.map((detail) => (
          <div key={detail.text} className={styles.iconContainer}>
            <detail.icon className={styles.icon} role='img' />
            {detail.url ? (
              <Link href={detail.url}>{detail.text}</Link>
            ) : (
              <Typography color='secondary'>{detail.text}</Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
