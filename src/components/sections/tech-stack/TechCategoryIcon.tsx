import type { ComponentType, SVGProps } from 'react'
import type { TechCategoryIconId } from '../../../data/techStack'
import {
  AiWorkflowIcon,
  BackendIcon,
  CloudStackIcon,
  DatabaseIcon,
  FrontendIcon,
  ToolsIcon,
} from '../SectionIcons'

const iconMap: Record<TechCategoryIconId, ComponentType<SVGProps<SVGSVGElement>>> = {
  frontend: FrontendIcon,
  backend: BackendIcon,
  database: DatabaseIcon,
  cloud: CloudStackIcon,
  tools: ToolsIcon,
  ai: AiWorkflowIcon,
}

type TechCategoryIconProps = {
  icon: TechCategoryIconId
  className?: string
}

export function TechCategoryIcon({ icon, className }: TechCategoryIconProps) {
  const Icon = iconMap[icon]

  return <Icon className={className} />
}
