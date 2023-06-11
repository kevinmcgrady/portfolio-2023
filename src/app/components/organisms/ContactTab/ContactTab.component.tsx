import { Fragment } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Typography } from '@/components/atoms/Typography/Typography.component';
import { Card } from '@/components/molecules/Card/Card.component';
import { Link } from '@/components/molecules/Link/Link.component';
import urls from '@/urls';

import styles from './ContactTab.module.scss';

export const ContactTab: React.FC = () => {
  return (
    <Fragment>
      <Typography variant='title'>Want to get in touch?</Typography>
      <Card>
        <Typography variant='subTitle'>Email</Typography>
        <Typography>
          Send me an email at{' '}
          <Link href={'mailto:' + urls.email}>{urls.email}</Link>
        </Typography>
        <Typography variant='subTitle'>Socials</Typography>
        <div className={styles.iconContainer}>
          <AiFillLinkedin className={styles.icon} />
          <Link href={urls.linkedIn}>{urls.linkedIn}</Link>
        </div>
        <div className={styles.iconContainer}>
          <AiFillGithub className={styles.icon} />
          <Link href={urls.gitHub}>{urls.gitHub}</Link>
        </div>
      </Card>
    </Fragment>
  );
};
