import cn from 'classnames';

import { Typography } from '@/components/atoms/Typography/Typography.component';

import styles from './Card.module.scss';

type CardProps = {
  children: JSX.Element[] | JSX.Element;
  gutterBottom?: boolean;
  location?: string;
  level?: string;
  dates?: string;
};

export const Card: React.FC<CardProps> = ({
  children,
  gutterBottom = false,
  location,
  level,
  dates,
}) => {
  return (
    <div
      className={cn(styles.card, gutterBottom && styles.gutter)}
      role='contentinfo'
    >
      <div className={styles.tagContainer} role='list'>
        {dates && (
          <div className={styles.tag}>
            <Typography variant='tag' isBold>
              {dates}
            </Typography>
          </div>
        )}
        {location && (
          <div className={styles.tag}>
            <Typography variant='tag' isBold>
              {location}
            </Typography>
          </div>
        )}
        {level && (
          <div className={styles.tag}>
            <Typography variant='tag' isBold>
              {level}
            </Typography>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
