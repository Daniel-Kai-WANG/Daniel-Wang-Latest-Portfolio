import { PageShell } from './components/layout/PageShell'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ResumeUnavailableSection } from './components/sections/ResumeUnavailableSection'
import { SignatureDivider } from './components/sections/SignatureDivider'
import { TechStackSection } from './components/sections/TechStackSection'

function App() {
  return (
    <PageShell>
      <HeroSection />
      <SignatureDivider />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
      <ResumeUnavailableSection />
      <ContactSection />
    </PageShell>
  )
}

export default App
