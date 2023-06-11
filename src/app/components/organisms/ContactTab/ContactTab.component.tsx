import { Fragment } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Typography } from '@/components/atoms/Typography/Typography.component';
import { Card } from '@/components/molecules/Card/Card.component';
import { Link } from '@/components/molecules/Link/Link.component';

import styles from './ContactTab.module.scss';

export const ContactTab: React.FC = () => {
  return (
    <Fragment>
      <Typography variant='title'>Want to get in touch?</Typography>
      <Card>
        <Typography variant='subTitle'>Email</Typography>
        <Typography>
          Send me an email at{' '}
          <Link href='mailto:kevinmcgrady47@gmail.com'>
            kevinmcgrady47@gmail.com
          </Link>
        </Typography>
        <Typography variant='subTitle'>Socials</Typography>
        <div className={styles.iconContainer}>
          <AiFillLinkedin className={styles.icon} />
          <Link href='https://www.linkedin.com/in/kev-mcgrady-639851102/'>
            https://www.linkedin.com/in/kev-mcgrady-639851102/
          </Link>
        </div>
        <div className={styles.iconContainer}>
          <AiFillGithub className={styles.icon} />
          <Link href='https://github.com/kevinmcgrady'>
            https://github.com/kevinmcgrady
          </Link>
        </div>
      </Card>
    </Fragment>
  );
};
