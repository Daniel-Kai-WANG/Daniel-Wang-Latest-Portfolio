import type { SkillCategory } from '../types/content'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & Mobile',
    metaphorLight: 'Sky kites and hot-air balloons',
    metaphorDark: 'Neon music chips',
    summary: 'Product-facing interfaces across desktop web and cross-platform mobile delivery.',
    items: ['React.js', 'Next.js', 'React Native', 'Expo', 'Vue.js', 'TypeScript', 'Responsive Design'],
  },
  {
    title: 'Backend',
    metaphorLight: 'Paper planes carrying service packets',
    metaphorDark: 'Equalizer-linked service nodes',
    summary: 'APIs, app logic, and modular services that keep product workflows stable.',
    items: ['Node.js', 'Nest.js', 'Laravel', 'Python', 'RESTful API Development'],
  },
  {
    title: 'Database',
    metaphorLight: 'Cloud storage islands',
    metaphorDark: 'Bassline storage discs',
    summary: 'Data structures that support delivery-ready applications and integrations.',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Cloud & DevOps',
    metaphorLight: 'Weather stations and sky towers',
    metaphorDark: 'Stage rig deployment modules',
    summary: 'Infrastructure touchpoints that support deployment, shipping, and environment consistency.',
    items: ['AWS', 'Docker', 'Firebase'],
  },
  {
    title: 'Tools & Platforms',
    metaphorLight: 'Weather badges and route markers',
    metaphorDark: 'Backstage pass badges',
    summary: 'Delivery tooling for collaboration, QA, design handoff, and project coordination.',
    items: ['GitHub', 'GitLab', 'Jira', 'Postman', 'Figma', 'Jest'],
  },
  {
    title: 'AI Workflow Skills',
    metaphorLight: 'Sunlight sparks and routing clouds',
    metaphorDark: 'Waveform glow and spotlight particles',
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
