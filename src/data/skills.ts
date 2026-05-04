import type { SkillCategory } from '../types/content'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & Mobile',
    metaphorLight: 'Sakura routes and snow panels',
    metaphorDark: 'Midnight glow surfaces',
    summary: 'Product-facing interfaces across desktop web and cross-platform mobile delivery.',
    items: ['React.js', 'Next.js', 'React Native', 'Expo', 'Vue.js', 'TypeScript', 'Responsive Design'],
  },
  {
    title: 'Backend',
    metaphorLight: 'Blossom-linked service lanes',
    metaphorDark: 'Luminous service currents',
    summary: 'APIs, app logic, and modular services that keep product workflows stable.',
    items: ['Node.js', 'Nest.js', 'Laravel', 'Python', 'RESTful API Development'],
  },
  {
    title: 'Database',
    metaphorLight: 'Frosted archive pools',
    metaphorDark: 'Deepwater memory vaults',
    summary: 'Data structures that support delivery-ready applications and integrations.',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Cloud & DevOps',
    metaphorLight: 'Snow-lit signal towers',
    metaphorDark: 'Aurora deployment rigs',
    summary: 'Infrastructure touchpoints that support deployment, shipping, and environment consistency.',
    items: ['AWS', 'Docker', 'Firebase'],
  },
  {
    title: 'Tools & Platforms',
    metaphorLight: 'Petal markers and frost badges',
    metaphorDark: 'Backstage light beacons',
    summary: 'Delivery tooling for collaboration, QA, design handoff, and project coordination.',
    items: ['GitHub', 'GitLab', 'Jira', 'Postman', 'Figma', 'Jest'],
  },
  {
    title: 'AI Workflow Skills',
    metaphorLight: 'Sakura sparks and winter threads',
    metaphorDark: 'Bioluminescent prompt lattice',
    summary: 'Workflow thinking that bridges structured inputs, AI assistance, CMS logic, and product delivery.',
    items: [
      'Requirement Translation',
      'Workflow Mapping',
      'Prompt-Aware UX',
      'CMS Integration',
      'Automation Thinking',
      'Cross-Team Delivery',
    ],
  },
]
