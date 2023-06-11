import { default as NextImage, ImageProps } from 'next/image';

import styles from './Image.module.scss';

export const Image: React.FC<ImageProps> = (props) => {
  return <NextImage className={styles.image} {...props} />;
};
