import cn from 'classnames';
import { ReactNode } from 'react';

import styles from './Typography.module.scss';

type Variants = 'body' | 'title' | 'subTitle' | 'tag';
type Color = 'primary' | 'secondary' | 'accent';

type TypographyProps = {
  children: ReactNode;
  variant?: Variants;
  color?: Color;
  isBold?: boolean;
  className?: string;
  onClick?: () => void;
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = 'primary',
  isBold = false,
  className,
  children,
  onClick,
}) => {
  switch (variant) {
    case 'body':
      return (
        <p
          onClick={onClick}
          className={cn(
            styles.body,
            styles[color],
            isBold && styles.isBold,
            className,
          )}
        >
          {children}
        </p>
      );
    case 'title':
      return (
        <h1
          role='heading'
          aria-level={1}
          onClick={onClick}
          className={cn(
            styles.title,
            styles[color],
            isBold && styles.isBold,
            className,
          )}
        >
          {children}
        </h1>
      );
    case 'subTitle':
      return (
        <h2
          role='heading'
          aria-level={2}
          onClick={onClick}
          className={cn(
            styles.subTitle,
            styles[color],
            isBold && styles.isBold,
            className,
          )}
        >
          {children}
        </h2>
      );
    case 'tag':
      return (
        <p
          onClick={onClick}
          className={cn(
            styles.tag,
            styles[color],
            isBold && styles.isBold,
            className,
          )}
        >
          {children}
        </p>
      );
  }
};
