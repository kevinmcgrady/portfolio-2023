import { default as NextLink, LinkProps } from 'next/link';

import styles from './Link.module.scss';

export const Link: React.FC<LinkProps & { children: string }> = (props) => {
  return (
    <NextLink {...props} className={styles.link} target='_blank' role='link'>
      {props.children}
    </NextLink>
  );
};
