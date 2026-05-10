const logoPathModules = import.meta.glob('../assets/logos/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const logoMarkupModules = import.meta.glob('../assets/logos/*.svg', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>

type CreateTechLogoOptions = {
  altText?: string
  artVariant?: 'standard' | 'wide' | 'tall'
  fallbackReason?: string
  labelVariant?: 'default' | 'compact'
}

function getDefaultPresentation(id: string) {
  if (id === 'react-native' || id === 'aws' || id === 'aws-cloud' || id === 'github-actions') {
    return {
      artVariant: 'wide' as const,
      labelVariant: 'compact' as const,
    }
  }

  if (id === 'workflow-automation' || id === 'prompt-engineering' || id === 'pdf-extraction') {
    return {
      artVariant: 'standard' as const,
      labelVariant: 'compact' as const,
    }
  }

  return {
    artVariant: 'standard' as const,
    labelVariant: 'default' as const,
  }
}

function resolveLogoAsset(fileName: string) {
  const moduleKey = `../assets/logos/${fileName}`

  return {
    logoPath: logoPathModules[moduleKey] ?? '',
    logoMarkup: logoMarkupModules[moduleKey] ?? null,
  }
}

export function createTechLogo(
  id: string,
  name: string,
  categoryId: string,
  fileName: string,
  options: CreateTechLogoOptions = {}
) {
  const { logoPath, logoMarkup } = resolveLogoAsset(fileName)
  const presentation = getDefaultPresentation(id)

  return {
    id,
    name,
    categoryId,
    logoPath,
    logoMarkup,
    altText: options.altText ?? `${name} logo`,
    artVariant: options.artVariant ?? presentation.artVariant,
    fallbackReason: options.fallbackReason,
    labelVariant: options.labelVariant ?? presentation.labelVariant,
  }
}
