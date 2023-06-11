import { Typography } from '@/components/atoms/Typography/Typography.component';
import { Card } from '@/components/molecules/Card/Card.component';
import { Link } from '@/components/molecules/Link/Link.component';

export const ExperienceTab: React.FC = () => {
  return (
    <div>
      <Typography variant='title'>Awards</Typography>
      <Card gutterBottom location='Paisley' dates='2019' level='Court Medal'>
        <Typography variant='subTitle'>
          The University of the West of Scotland
        </Typography>
        <Typography>
          I received the Court Medal for Web & Mobile development.
        </Typography>
      </Card>
      <Typography variant='title'>Experience</Typography>
      <Card
        gutterBottom
        location='Glasgow / Remote'
        dates='2019 - present'
        level='Mid-Level'
      >
        <Typography variant='subTitle'>Waracle</Typography>
        <Typography>
          I am currently employed by Waracle. I work in the communications team
          in ScottishPower. I am responsible for developing landing pages,
          emails and interactive journeys for ScottishPower customers.
        </Typography>
        <Typography>
          I am responsible for both front-end development and data loading for
          each campaign I work on. When working on campaigns, it is important
          that I work to a strict deadline and ensure all work is completed,
          tested and verified before the campaign launch. I build each campaign
          using React, Redux, Redux-Observables and Typescript. Each journey is
          tested thoroughly with unit tests. We are currently in the process of
          moving the main codebase over to NestJs.
        </Typography>
      </Card>
      <Card
        gutterBottom
        location='Glasgow / Remote'
        dates='2018 - 2019'
        level='Med-Level'
      >
        <Typography variant='subTitle'>Freelancing</Typography>
        <Typography>
          When freelancing, I worked with various clients and agencies to design
          and develop a range of websites and web applications for clients. I
          have gained valuable skills over this time in both web development and
          client interaction. I completed the development of a new website for
          The London Tenants Foundation with an agency called A Big Egg.
        </Typography>
        <Typography>
          This website was designed and developed in WordPress using a custom
          theme. The experience was more than valuable as I was exposed to new
          technologies including Timber and Twig. The URL for this website is{' '}
          <Link href='https://londontenants.org/'>
            https://londontenants.org/
          </Link>
          .
        </Typography>
      </Card>
      <Card gutterBottom location='Glasgow' level='Junior' dates='2015 - 2016'>
        <Typography variant='subTitle'>Crane7</Typography>
        <Typography>
          My Main role at Crane7 was as a Junior Developer. I learned a great
          deal from the team including HTML5, CSS3, CSS frameworks, responsive
          design and development and jQuery. I recently started learning
          WordPress building custom themes from HTML files and plugins for
          custom content and website statistics. Before Crane7 closed I was
          given my own project and I was responsible for the design of the
          finished WordPress site.
        </Typography>
      </Card>
      <Typography variant='title'>Education</Typography>
      <Card
        gutterBottom
        location='Paisley'
        level='BSc Web & Mobile Development with Distinction'
        dates='2018 - 2019'
      >
        <Typography variant='subTitle'>
          The University of the West of Scotland
        </Typography>
        <Typography>
          When attending university, I had the opportunity to work with various
          talented designers and developers, both students and lecturers. I was
          involved in designing and developing a mobile application called
          Comida. This application was developed using NodeJS, Firebase and
          Express. The main goal of the application was to allow customers to
          book tables at available restaurants.
        </Typography>
        <Typography>
          Throughout university I also designed a new database structure for
          Argos. This module provided me with the knowledge to design and
          implement complex database design using industry standard design
          techniques. At the end of the academic year I received a BSc – with
          distinction in Web and Mobile Development and also the Court medal.
        </Typography>
      </Card>
      <Card
        gutterBottom
        location='Glasgow'
        dates='2016 - 2018'
        level='HND Web Development'
      >
        <Typography variant='subTitle'>The City of Glasgow College</Typography>
        <Typography>
          Over the two years of studying web development at The City of Glasgow
          College. I have learned a vast range of skills and gained experience
          in designing and developing projects. In the first year of learning I
          studied the basics of HTML, CSS and JavaScript. This enhanced my
          existing skills in the technologies.
        </Typography>
        <Typography>
          I also learned new topics such as user centered design, user interface
          design and working with databases. At the end of the first year I
          received an A grade for my end of year exam. In the second year I
          studied topics such as database design, user experience design,
          project management, MySQL and PHP. This enhanced my skills and
          broadened my experience in server-side development and design. I also
          received an A grade for my end of year project. The end of year
          project involved researching, designing and developing an online
          booking system for the National Museum of Scotland.
        </Typography>
      </Card>
    </div>
  );
};
