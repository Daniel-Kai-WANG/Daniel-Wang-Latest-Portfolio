import { createTechLogo } from './techLogoRegistry'

export type TechCategoryIconId =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'tools'
  | 'ai'

export type TechLogo = {
  id: string
  name: string
  categoryId: string
  logoPath: string
  logoMarkup: string | null
  altText: string
  artVariant: 'standard' | 'wide' | 'tall'
  labelVariant: 'default' | 'compact'
  fallbackReason?: string
}

export type TechStackCategory = {
  id: string
  label: string
  icon: TechCategoryIconId
  description: string
  logos: TechLogo[]
}

const frontendCategoryId = 'frontend-mobile'
const backendCategoryId = 'backend-systems'
const databaseCategoryId = 'database-storage'
const cloudCategoryId = 'cloud-devops'
const toolsCategoryId = 'tools-platforms'
const aiCategoryId = 'ai-workflow-skills'

export const techStackCategories: TechStackCategory[] = [
  {
    id: frontendCategoryId,
    label: 'Frontend & Mobile',
    icon: 'frontend',
    description:
      'Commercial experience building responsive, maintainable user interfaces across React, React Native, Next.js, Expo, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, and SCSS. Strong in translating design and business requirements into reusable components, cross-platform mobile flows, and production-ready web interfaces. Experienced in delivering client-facing web and mobile features across commercial projects, including bridal commerce, Expo mobile app delivery, and React Native application maintenance.',
    logos: [
      createTechLogo('react', 'React', frontendCategoryId, 'react.svg'),
      createTechLogo('react-native', 'React Native', frontendCategoryId, 'react-native.svg'),
      createTechLogo('nextjs', 'Next.js', frontendCategoryId, 'nextjs.svg'),
      createTechLogo('expo', 'Expo', frontendCategoryId, 'expo.svg'),
      createTechLogo('typescript', 'TypeScript', frontendCategoryId, 'typescript.svg'),
      createTechLogo('javascript', 'JavaScript', frontendCategoryId, 'javascript.svg'),
      createTechLogo('html5', 'HTML5', frontendCategoryId, 'html5.svg'),
      createTechLogo('css3', 'CSS3', frontendCategoryId, 'css3.svg'),
      createTechLogo('tailwindcss', 'Tailwind CSS', frontendCategoryId, 'tailwindcss.svg'),
      createTechLogo('scss', 'SCSS', frontendCategoryId, 'scss.svg'),
    ],
  },
  {
    id: backendCategoryId,
    label: 'Backend Systems',
    icon: 'backend',
    description:
      'Practical full stack experience working with Node.js, Express.js, NestJS, Laravel, PHP, RESTful APIs, and third-party API integrations. Strong in connecting frontend workflows with backend services, restructuring data-fetching logic, and building automation-focused service modules. Experience includes integrating Boond Manager APIs, supporting PDF data extraction workflows, and improving application performance through cleaner backend and API handling.',
    logos: [
      createTechLogo('nodejs', 'Node.js', backendCategoryId, 'nodejs.svg', {
        preferImage: true,
      }),
      createTechLogo('express', 'Express.js', backendCategoryId, 'express.svg'),
      createTechLogo('nestjs', 'NestJS', backendCategoryId, 'nestjs.svg'),
      createTechLogo('laravel', 'Laravel', backendCategoryId, 'laravel.svg'),
      createTechLogo('php', 'PHP', backendCategoryId, 'php.svg'),
      createTechLogo('rest-api', 'REST API', backendCategoryId, 'rest-api.svg', {
        fallbackReason: 'REST API does not have a single official vendor logo, so a local icon-style asset is used.',
      }),
    ],
  },
  {
    id: databaseCategoryId,
    label: 'Database & Storage',
    icon: 'database',
    description:
      'Working knowledge of MongoDB, MySQL, SQL, AWS, Docker, and Firebase in web and mobile development contexts. Experience includes supporting structured project data, API-integrated workflows, Firebase push notifications, and cross-platform application delivery. Best positioned as a developer with practical exposure to database and cloud tools rather than a specialist cloud or database engineer.',
    logos: [
      createTechLogo('mongodb', 'MongoDB', databaseCategoryId, 'mongodb.svg'),
      createTechLogo('mysql', 'MySQL', databaseCategoryId, 'mysql.svg'),
      createTechLogo('sql', 'SQL', databaseCategoryId, 'sql.svg', {
        fallbackReason: 'SQL is a standard rather than one official product brand, so a local icon-style asset is used.',
      }),
      createTechLogo('aws', 'AWS', databaseCategoryId, 'aws.webp'),
      createTechLogo('docker', 'Docker', databaseCategoryId, 'docker.png'),
      createTechLogo('firebase', 'Firebase', databaseCategoryId, 'firebase.png'),
    ],
  },
  {
    id: cloudCategoryId,
    label: 'Cloud & DevOps',
    icon: 'cloud',
    description:
      'Practical exposure to AWS, Docker, Firebase, deployment workflows, environment setup, and production-support tasks across web and mobile projects. Comfortable supporting delivery pipelines, debugging environment issues, testing deployed features, and maintaining reliable project setup. Best positioned as a developer with hands-on delivery experience rather than a specialist DevOps engineer.',
    logos: [
      createTechLogo('aws-cloud', 'AWS', cloudCategoryId, 'aws.webp'),
      createTechLogo('docker-cloud', 'Docker', cloudCategoryId, 'docker.png'),
      createTechLogo('firebase-cloud', 'Firebase', cloudCategoryId, 'firebase.png'),
      createTechLogo('github-actions', 'GitHub Actions', cloudCategoryId, 'github-actions.svg'),
    ],
  },
  {
    id: toolsCategoryId,
    label: 'Tools & Platforms',
    icon: 'tools',
    description:
      'Experienced with Git, GitHub, GitLab, Jira, Postman, Figma, Android Studio, and Xcode across commercial web and mobile projects. Comfortable working in team-based development workflows involving task planning, debugging, API testing, design handoff, mobile testing, and delivery coordination. Strong in maintaining clear development records, resolving integration issues, and supporting reliable feature delivery across frontend, backend, and mobile environments.',
    logos: [
      createTechLogo('git', 'Git', toolsCategoryId, 'git.svg'),
      createTechLogo('github', 'GitHub', toolsCategoryId, 'github.svg'),
      createTechLogo('gitlab', 'GitLab', toolsCategoryId, 'gitlab.svg'),
      createTechLogo('jira', 'Jira', toolsCategoryId, 'jira.png'),
      createTechLogo('postman', 'Postman', toolsCategoryId, 'postman.svg'),
      createTechLogo('figma', 'Figma', toolsCategoryId, 'figma.svg'),
      createTechLogo('android-studio', 'Android Studio', toolsCategoryId, 'android-studio.svg'),
      createTechLogo('xcode', 'Xcode', toolsCategoryId, 'xcode.png'),
    ],
  },
  {
    id: aiCategoryId,
    label: 'AI Workflow Skills',
    icon: 'ai',
    description:
      'Practical experience applying AI-assisted development and workflow automation to improve delivery clarity, reduce rework, and support structured implementation planning. Experience includes building automation features for PDF data extraction, order-processing workflows, prompt documentation, requirement breakdown, code review preparation, and reusable development notes. Best positioned as a web/full stack developer who can use AI tools effectively to improve delivery, rather than as a machine learning engineer.',
    logos: [
      createTechLogo('openai', 'OpenAI', aiCategoryId, 'openai.jpeg'),
      createTechLogo('codex', 'Codex', aiCategoryId, 'codex-color.png'),
      createTechLogo('claude', 'Claude', aiCategoryId, 'claude.svg'),
      createTechLogo('ai-automation', 'AI Automation', aiCategoryId, 'ai-automation.svg', {
        fallbackReason: 'AI Automation is a workflow capability rather than one official product brand, so a local icon-style asset is used.',
      }),
      createTechLogo(
        'prompt-engineering',
        'Prompt Engineering',
        aiCategoryId,
        'prompt-engineering.svg',
        {
          fallbackReason:
            'Prompt Engineering is a workflow capability rather than one official product brand, so a local icon-style asset is used.',
        }
      ),
      createTechLogo(
        'workflow-automation',
        'Workflow Automation',
        aiCategoryId,
        'workflow-automation.svg',
        {
          fallbackReason:
            'Workflow Automation is a workflow capability rather than one official product brand, so a local icon-style asset is used.',
        }
      ),
      createTechLogo('pdf-extraction', 'PDF Extraction', aiCategoryId, 'pdf-extraction.svg', {
        fallbackReason: 'PDF Extraction is a workflow capability rather than one official product brand, so a local icon-style asset is used.',
      }),
    ],
  },
]
