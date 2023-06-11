import { Fragment } from 'react';
import { HiBriefcase, HiCake, HiCalendar,HiLink } from 'react-icons/hi';

import { AboutTab } from '@/components/AboutTab/AboutTab.component';
import { Avatar } from '@/components/Avatar/Avatar.component';
import { Bio } from '@/components/Bio/Bio.component';
import { ContactTab } from '@/components/ContactTab/ContactTab.component';
import { Container } from '@/components/Container/Container.component';
import { ExperienceTab } from '@/components/ExperienceTab/ExperienceTab.component';
import { Header } from '@/components/Header/Header.component';
import { Navigation } from '@/components/Navigation/Navigation.component';
import { ProjectsTab } from '@/components/ProjectsTab/ProjectsTab.component';
import { Tabs } from '@/components/Tabs/Tabs.component';

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
              { text: 'Available', icon: HiBriefcase },
              { text: 'GitHub', icon: HiLink },
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
