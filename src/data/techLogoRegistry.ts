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
  fallbackReason?: string
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

  return {
    id,
    name,
    categoryId,
    logoPath,
    logoMarkup,
    altText: options.altText ?? `${name} logo`,
    fallbackReason: options.fallbackReason,
  }
}
