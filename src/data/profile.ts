import type { Profile } from '../types/content'

export const profile: Profile = {
  name: 'Daniel Wang',
  badge: 'Full-Stack Developer · CMS Builder · AI Workflow Builder',
  headline: 'I build digital products that think, connect, and automate.',
  subtitle:
    'Across web, mobile, backend APIs, CMS platforms, and AI-assisted workflows, I turn complex requirements into reliable, maintainable digital systems.',
  location: 'South Brisbane, QLD',
  summary:
    'Full-stack developer with production experience spanning React, React Native, Node.js, Laravel, CMS implementation, and delivery-focused AI workflow design.',
  heroStats: [
    { value: '2+', label: 'Years Professional Experience' },
    { value: '20+', label: 'Production Projects' },
    { value: '400+', label: 'Active App Users' },
  ],
  navigation: [
    { label: 'Home', href: '#top' },
    { label: 'Journey', href: '#experience' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  workflow: [
    { role: 'Web Development', desc: "Responsive websites, CMS-driven pages, API-connected forms, and full stack web features."},
    { role: 'Full-Stack Development', desc: "Frontend interfaces, backend APIs, Laravel / Node.js services, and integrated workflows."},
    { role: 'Frontend / App Development', desc: "JavaScript, TypeScript, React, Next.js, React Native, dashboards, forms, and mobile UI."},
    { role: 'CMS / HubSpot Development', desc: "HubSpot CMS, HubL, HubDB, reusable modules, dynamic pages, and content workflows."},
    { role:  'AI-Assisted Workflow', desc: "AI tools for requirement breakdown, implementation planning, code review, and repeatable delivery."},
  ],
  primaryCta: { label: 'Explore Projects', href: '#projects' },
  secondaryCta: { label: 'See Experience Journey', href: '#experience' },
  contactLinks: [
    {
      label: 'Email',
      value: 'kaiwang2027@gmail.com',
      href: 'mailto:kaiwang2027@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'daniel-kai-wang',
      href: 'https://www.linkedin.com/in/daniel-kai-wang/',
    },
    {
      label: 'GitHub',
      value: 'https://github.com/Daniel-Kai-WANG',
      href: 'https://github.com/Daniel-Kai-WANG',
    },
    {
      label: 'Portfolio Archive',
      value: 'daniel-kai-wang.github.io/Daniel-WANG-Portfolio',
      href: 'https://daniel-kai-wang.github.io/Daniel-WANG-Portfolio/',
    },
  ],
  resumeVariants: [
    {
      label: 'Web Developer',
      role: 'Broader web delivery focus',
      href: '/resumes/Daniel_Wang_Web_Developer_Resume.pdf',
      fileName: 'Daniel_Wang_Web_Developer_Resume.pdf',
    },
    {
      label: 'Full Stack Developer',
      role: 'End-to-end delivery focus',
      href: '/resumes/Daniel_Wang_Full_Stack_Developer_Resume.pdf',
      fileName: 'Daniel_Wang_Full_Stack_Developer_Resume.pdf',
    },
    {
      label: 'Front End Developer',
      role: 'React UI focus',
      href: '/resumes/Daniel_Wang_Frontend_Developer_Resume.pdf',
      fileName: 'Daniel_Wang_Frontend_Developer_Resume.pdf',
    },
    {
      label: 'CMS Developer',
      role: 'HubSpot / CMS implementation focus',
      href: '/resumes/Daniel_Wang_CMS_HubSpot_Developer_Resume.pdf',
      fileName: 'Daniel_Wang_CMS_HubSpot_Developer_Resume.pdf',
    },
    {
      label: 'AI Workflow Developer',
      role: 'Automation / integration focus',
      href: '/resumes/Daniel_Wang_AI_Workflow_Automation_Developer_Resume.pdf',
      fileName: 'Daniel_Wang_AI_Workflow_Automation_Developer_Resume.pdf',
    },
  ],
}
