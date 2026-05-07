export function ContactSectionAccent() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-6 top-10 h-20 w-20 rounded-full border"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 24%, var(--color-border))',
          background:
            'radial-gradient(circle at 35% 35%, color-mix(in srgb, var(--color-surface) 90%, white 10%), transparent 72%)',
        }}
      />
      <div
        className="absolute right-8 top-6 h-16 w-28 rounded-full border"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-secondary) 18%, var(--color-border))',
          background:
            'linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 12%, transparent), color-mix(in srgb, var(--color-warm) 12%, transparent))',
        }}
      />
      <div
        className="absolute bottom-6 left-5 h-12 w-20 rounded-full border"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 18%, var(--color-border))',
          background:
            'linear-gradient(135deg, color-mix(in srgb, var(--color-surface) 92%, transparent), color-mix(in srgb, var(--color-warm) 10%, transparent))',
        }}
      />
      <div
        className="absolute bottom-4 right-6 h-24 w-24 rounded-full"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-primary) 12%, transparent) 0%, transparent 72%)',
        }}
      />
    </div>
  )
}
