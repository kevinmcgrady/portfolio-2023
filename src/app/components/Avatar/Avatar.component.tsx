import Image from 'next/image';

import styles from './Avatar.module.scss';

export const Avatar: React.FC = () => {
  return (
    <Image
      className={styles.image}
      alt='Kevin McGrady'
      src='/images/profileImage.jpeg'
      width={145}
      height={145}
    />
  );
};
