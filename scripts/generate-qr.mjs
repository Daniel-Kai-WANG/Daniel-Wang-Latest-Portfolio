import fs from 'node:fs/promises'
import path from 'node:path'
import QRCode from 'qrcode'

const inputUrl = process.argv[2] ?? process.env.PORTFOLIO_URL

if (!inputUrl) {
  console.error('Usage: node scripts/generate-qr.mjs <portfolio-url>')
  process.exit(1)
}

const rootDir = process.cwd()
const targets = [
  path.join(rootDir, 'public', 'qr', 'portfolio-qr.png'),
  path.join(rootDir, 'docs', 'portfolio-qr.png'),
]

await Promise.all(
  targets.map(async (target) => {
    await fs.mkdir(path.dirname(target), { recursive: true })
    await QRCode.toFile(target, inputUrl, {
      color: {
        dark: '#0F172A',
        light: '#FFFFFF',
      },
      margin: 2,
      width: 720,
    })
  }),
)

console.log(`QR code generated for ${inputUrl}`)
for (const target of targets) {
  console.log(`- ${path.relative(rootDir, target)}`)
}
