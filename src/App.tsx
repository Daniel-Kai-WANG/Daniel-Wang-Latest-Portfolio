import { PageShell } from './components/layout/PageShell'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ResumeUnavailableSection } from './components/sections/ResumeUnavailableSection'
import { TechStackSection } from './components/sections/TechStackSection'

function App() {
  return (
    <PageShell>
      <HeroSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
      <ResumeUnavailableSection />
      <ContactSection />
    </PageShell>
  )
}

export default App
