import { Fragment } from 'react';

import { Card } from '@/components/Card/Card.component';
import { Typography } from '@/components/Typography/Typography.component';

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
