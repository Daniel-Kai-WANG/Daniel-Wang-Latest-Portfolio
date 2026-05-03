export type ThemeMode = 'light' | 'dark'

export type NavItem = {
  label: string
  href: string
}

export type HeroStat = {
  value: string
  label: string
}

export type ContactLink = {
  label: string
  value: string
  href: string
}

export type Profile = {
  name: string
  badge: string
  headline: string
  subtitle: string
  location: string
  summary: string
  heroStats: HeroStat[]
  navigation: NavItem[]
  workflowLight: string[]
  workflowDark: string[]
  primaryCta: NavItem
  secondaryCta: NavItem
  contactLinks: ContactLink[]
}

export type ExperienceItem = {
  company: string
  role: string
  date: string
  location: string
  highlights: string[]
  tech: string[]
  metric: string
}

export type ProjectItem = {
  title: string
  tag: string
  description: string
  highlights: string[]
  tech: string[]
  status: string
  ctaLabel: string
  ctaHref: string
}

export type SkillCategory = {
  title: string
  metaphorLight: string
  metaphorDark: string
  summary: string
  items: string[]
}
