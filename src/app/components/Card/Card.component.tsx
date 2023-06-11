import cn from 'classnames';

import { Typography } from '@/components/Typography/Typography.component';

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
    <div className={cn(styles.card, gutterBottom && styles.gutter)}>
      <div className={styles.tagContainer}>
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
