import { ProfileSection } from '../../profile/components/ProfileSection';
import { IntroSection } from '../components/IntroSection';
import { ProjectTimeline } from '../../project/components/ProjectTimeline';
import { ContactSection } from '../../contact/components/ContactSection';

export function MainPage() {
  
  return (<>
  
    <ProfileSection showContacts />
      <IntroSection />
    <ProjectTimeline compact />
    <ContactSection />

  </>);
}
