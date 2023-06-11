import { Card } from '@/components/Card/Card.component';
import { Typography } from '@/components/Typography/Typography.component';

export const AboutTab: React.FC = () => {
  return (
    <Card>
      <Typography variant='title'>Hey, there 👋</Typography>
      <Typography>
        I&apos;m a Full Stack Web Developer currently living in Glasgow. I enjoy
        creating web applications that enhance user connectivity and spread the
        love ❤️.
      </Typography>
      <Typography variant='subTitle'>Everything Web Development</Typography>
      <Typography>
        In the beginning, I studied Web Development at The City of Glasgow
        College where I achieved an HND in Web Development. I loved every moment
        of it. I then moved on to The University of the West of Scotland where I
        was awarded a BSc in Web & Mobile Development with Distinction. While at
        university I was lucky enough to be awarded the Court Medal for my
        efforts!
      </Typography>
      <Typography>
        I am currently employed as a mid-level developer with Waracle where I am
        based in the ScottishPower team.💡
      </Typography>
      <Typography variant='subTitle'>Outside of work</Typography>
      <Typography>
        I enjoy learning and experiencing what the world has to offer! I am
        currently interested in machine learning and ethical hacking. I feel
        these topics have great value when it comes to the web!
      </Typography>
      <Typography>
        When I am not at my laptop, I enjoy travelling to new places,
        experiencing new activities and finding a good cycle route! 🚲
      </Typography>
    </Card>
  );
};
