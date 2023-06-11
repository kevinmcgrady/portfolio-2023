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
          <>
            <Typography variant='tag' color='accent' isBold>
              {dates}
            </Typography>
            <Typography variant='tag'>•</Typography>
          </>
        )}
        {location && (
          <>
            <Typography variant='tag' color='accent' isBold>
              {location}
            </Typography>
            <Typography variant='tag'>•</Typography>
          </>
        )}
        {level && (
          <Typography variant='tag' color='accent' isBold>
            {level}
          </Typography>
        )}
      </div>
      {children}
    </div>
  );
};
