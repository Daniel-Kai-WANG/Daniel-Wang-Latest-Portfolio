import type { ProjectItem } from '../types/content'

export const projects: ProjectItem[] = [
  {
    tag: 'AI Platform + CMS',
    title: 'Agentic AI Team Platform & Company Website',
    description:
      'A delivery-focused full-stack environment that blended client customisation work, structured interfaces, backend services, and a HubSpot-powered marketing surface.',
    highlights: [
      'Delivered client-specific product customisations for enterprise workflows.',
      'Turned Figma concepts into production interfaces with real interaction logic.',
      'Built and extended HubSpot implementation with embedded HTML and custom scripts.',
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'HubSpot'],
    status: 'Private enterprise work',
    ctaLabel: 'Discuss this build',
    ctaHref: '#contact',
  },
  {
    tag: 'Mobile Product',
    title: 'Golf Wizard Mobile App',
    description:
      'A production mobile application delivered through iterative freelance collaboration, release management, and front-end stabilisation for real users.',
    highlights: [
      'Released to Google Play and the App Store.',
      'Validated behavior through TestFlight and Android device testing.',
      'Improved state handling to resolve freezes and smooth the app experience.',
    ],
    tech: ['React Native', 'TypeScript', 'Xcode', 'Android Studio', 'Postman'],
    status: 'Production app, case study on request',
    ctaLabel: 'Request walkthrough',
    ctaHref: '#contact',
  },
  {
    tag: 'Legacy Modernisation',
    title: 'Legacy System Modernisation at Digital 8',
    description:
      'A multi-surface upgrade initiative that covered web, mobile, admin tooling, and feature restoration across an aging platform.',
    highlights: [
      'Migrated 61 mobile pages while maintaining 95% feature parity.',
      'Supported the admin portal relaunch and new feature rollout.',
      'Helped launch a new Expo-based project while contributing backend support.',
    ],
    tech: ['Next.js', 'React Native', 'Expo', 'Laravel', 'Tailwind CSS'],
    status: 'Client delivery, not public',
    ctaLabel: 'Start a similar upgrade',
    ctaHref: '#contact',
  },
  {
    tag: 'API Workflow System',
    title: 'Boond Manager API System at Easy Skill',
    description:
      'An integration-heavy workflow build for payslip generation and display, backed by measurable performance wins and fast delivery.',
    highlights: [
      'Built the project framework for frontend, backend modules, and data flow.',
      'Reduced request volume by 60%.',
      'Improved page load time by 90 seconds and shipped ahead of schedule.',
    ],
    tech: ['React.js', 'TypeScript', 'Nest.js', 'Axios', 'Tailwind CSS'],
    status: 'Internal workflow solution',
    ctaLabel: 'Talk API systems',
    ctaHref: '#contact',
  },
]
