import { Fragment } from 'react';

import { Typography } from '@/components/atoms/Typography/Typography.component';
import { Card } from '@/components/molecules/Card/Card.component';

export const ProjectsTab: React.FC = () => {
  return (
    <Fragment>
      <Typography variant='title'>Projects</Typography>
      <Card gutterBottom>
        <span></span>
      </Card>
      <Card gutterBottom>
        <span></span>
      </Card>
    </Fragment>
  );
};
