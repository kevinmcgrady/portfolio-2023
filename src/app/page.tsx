import { Fragment } from 'react';
import { HiCake, HiCalendar, HiLink } from 'react-icons/hi';

import { Avatar } from '@/components/atoms/Avatar/Avatar.component';
import { Container } from '@/components/layout/Container/Container.component';
import { Bio } from '@/components/molecules/Bio/Bio.component';
import { Header } from '@/components/molecules/Header/Header.component';
import { Navigation } from '@/components/molecules/Navigation/Navigation.component';
import { Tabs } from '@/components/molecules/Tabs/Tabs.component';
import { AboutTab } from '@/components/organisms/AboutTab/AboutTab.component';
import { ContactTab } from '@/components/organisms/ContactTab/ContactTab.component';
import { ExperienceTab } from '@/components/organisms/ExperienceTab/ExperienceTab.component';
import { ProjectsTab } from '@/components/organisms/ProjectsTab/ProjectsTab.component';
import urls from '@/urls';

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <Container>
        <Header />
        <Container isNarrow>
          <Avatar />
          <Bio
            title='Kevin McGrady'
            subTitle='Creates user focused web applications'
            description='Mid Level Developer. Full Stack Developer. Glasgow, Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿.'
            details={[
              {
                text: 'LinkedIn',
                icon: HiLink,
                url: urls.linkedIn,
              },
              {
                text: 'GitHub',
                icon: HiLink,
                url: urls.gitHub,
              },
              { text: 'September 11th', icon: HiCake },
              { text: 'Joined Jan 2023', icon: HiCalendar },
            ]}
          />
          <Tabs
            tabs={[
              { title: 'Projects', element: <ProjectsTab /> },
              { title: 'About', element: <AboutTab /> },
              { title: 'Contact', element: <ContactTab /> },
              { title: 'Experience', element: <ExperienceTab /> },
            ]}
          />
        </Container>
      </Container>
    </Fragment>
  );
}
