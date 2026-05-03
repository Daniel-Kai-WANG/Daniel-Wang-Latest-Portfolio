import type { Profile } from '../types/content'

export const profile: Profile = {
  name: 'Daniel Wang',
  badge: 'Full-Stack Developer + AI Workflow Builder',
  headline: 'I build digital products that think, connect, and automate.',
  subtitle:
    'I work across web, mobile, backend services, CMS platforms, and AI-assisted workflows to help teams turn complex requirements into reliable digital systems.',
  location: 'South Brisbane, QLD',
  summary:
    'Full-stack developer with production experience spanning React, React Native, Node.js, Laravel, CMS implementation, and delivery-focused AI workflow design.',
  heroStats: [
    { value: '2+', label: 'Years Professional Experience' },
    { value: '15+', label: 'Projects Across Web & Mobile' },
    { value: '400+', label: 'Users Production Mobile App Served' },
  ],
  navigation: [
    { label: 'Home', href: '#top' },
    { label: 'Journey', href: '#experience' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  workflowLight: [
    'Business Brief',
    'Structured Data',
    'AI Assist',
    'API / CMS Integration',
    'Product Delivery',
  ],
  workflowDark: ['Brief', 'Data', 'AI Assist', 'API / CMS', 'Delivery'],
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
      label: 'Portfolio Archive',
      value: 'daniel-kai-wang.github.io/Daniel-WANG-Portfolio',
      href: 'https://daniel-kai-wang.github.io/Daniel-WANG-Portfolio/',
    },
  ],
}
