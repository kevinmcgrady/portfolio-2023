import { Fragment } from 'react';

import { Image } from '@/components/atoms/Image/Image.component';
import { Typography } from '@/components/atoms/Typography/Typography.component';
import { Card } from '@/components/molecules/Card/Card.component';
import { Link } from '@/components/molecules/Link/Link.component';

export const ProjectsTab: React.FC = () => {
  return (
    <Fragment>
      <Typography variant='title'>Projects</Typography>
      <Card gutterBottom>
        <Typography variant='subTitle'>Clipz</Typography>
        <Typography>
          Clipz is an innovative web application that provides users with a
          seamless and user-friendly platform for managing and sharing their
          video clips. Built with cutting-edge technologies including Angular,
          Firebase, ffmpeg, and Typescript, Clipz offers a robust and
          feature-rich experience.
        </Typography>
        <Image src='/images/clipz.png' alt='clipz' width={528} height={300} />
        <Typography>
          <Link href='https://shareme-steel.vercel.app/'>
            https://shareme-steel.vercel.app/
          </Link>
        </Typography>
        <Typography>
          Once logged in, users can easily upload their video clips from their
          devices. Clipz leverages Angular&apos;s powerful front-end framework
          to provide a smooth and intuitive uploading process. Users can drag
          and drop their clips or browse their files to select multiple videos
          at once. As the files are uploaded, Clipz utilizes ffmpeg, a powerful
          multimedia framework, to process and optimize the clips for optimal
          playback.
        </Typography>
        <Typography>
          Furthermore, Clipz leverages the real-time database capabilities of
          Firebase to enable seamless collaboration and sharing of clips. Users
          can share individual clips or entire folders with specific users or
          groups, allowing for easy collaboration on projects or sharing
          memories with friends and family. The real-time updates ensure that
          any changes made to shared clips are instantly reflected for all users
          involved. tincidunt.
        </Typography>
      </Card>
      <Card gutterBottom>
        <Typography variant='subTitle'>Shareme</Typography>
        <Typography>
          Shareme is an exciting web application designed to facilitate seamless
          content sharing and interaction among users. Built using cutting-edge
          technologies such as React, Sanity, and Google Login, Shareme provides
          a user-friendly platform that enables users to login, create posts,
          search for specific content, save or download posts, and access their
          personal accounts.
        </Typography>
        <Image
          src='/images/shareme.png'
          alt='shareme'
          width={528}
          height={300}
        />
        <Typography>
          <Link href='https://clips-silk-delta.vercel.app/'>
            https://clips-silk-delta.vercel.app/
          </Link>
        </Typography>
        <Typography>
          To enhance the discoverability of posts, Shareme provides robust
          search functionalities. Users can search for specific content using
          keywords or phrases in the search bar. Additionally, Shareme allows
          users to browse posts by category, enabling them to explore and engage
          with content that aligns with their interests.
        </Typography>
        <Typography>
          The integration of Sanity as the content management system enables
          Shareme to efficiently handle and organize user-generated content. The
          combination of React and Sanity ensures a seamless and dynamic
          experience, allowing users to interact with the platform smoothly.
        </Typography>
      </Card>
    </Fragment>
  );
};
