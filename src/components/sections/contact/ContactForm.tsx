import type { FormEvent } from 'react'

type ContactFormValues = {
  email: string
  message: string
  name: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

type ContactFormProps = {
  errorMessage: string | null
  errors: ContactFormErrors
  isSubmitting: boolean
  onChange: (field: keyof ContactFormValues, value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  values: ContactFormValues
}

const fieldClassName =
  'w-full rounded-[1.2rem] border px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--color-primary)_22%,transparent)]'

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null
  }

  return <p className="text-sm text-[var(--color-warm)]">{message}</p>
}

export function ContactForm({
  errorMessage,
  errors,
  isSubmitting,
  onChange,
  onSubmit,
  values,
}: ContactFormProps) {
  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--color-text)]">Your Name</span>
          <input
            className={fieldClassName}
            style={{
              borderColor: errors.name
                ? 'color-mix(in srgb, var(--color-warm) 60%, var(--color-border))'
                : 'var(--color-border)',
              background: 'color-mix(in srgb, var(--color-surface) 82%, transparent)',
            }}
            type="text"
            name="name"
            value={values.name}
            onChange={(event) => onChange('name', event.target.value)}
            placeholder="John Doe"
            aria-invalid={Boolean(errors.name)}
          />
          <FieldError message={errors.name} />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--color-text)]">Email Address</span>
          <input
            className={fieldClassName}
            style={{
              borderColor: errors.email
                ? 'color-mix(in srgb, var(--color-warm) 60%, var(--color-border))'
                : 'var(--color-border)',
              background: 'color-mix(in srgb, var(--color-surface) 82%, transparent)',
            }}
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => onChange('email', event.target.value)}
            placeholder="john@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          <FieldError message={errors.email} />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[var(--color-text)]">How can I help?</span>
        <textarea
          className={fieldClassName}
          style={{
            borderColor: errors.message
              ? 'color-mix(in srgb, var(--color-warm) 60%, var(--color-border))'
              : 'var(--color-border)',
            background: 'color-mix(in srgb, var(--color-surface) 82%, transparent)',
            minHeight: '11rem',
            resize: 'vertical',
          }}
          name="message"
          value={values.message}
          onChange={(event) => onChange('message', event.target.value)}
          placeholder="Tell me about your project goals..."
          aria-invalid={Boolean(errors.message)}
        />
        <FieldError message={errors.message} />
      </label>

      <div className="flex flex-col gap-3 pt-1">
        {errorMessage ? (
          <p
            className="rounded-[1.1rem] border px-4 py-3 text-sm text-[var(--color-text)]"
            style={{
              borderColor: 'color-mix(in srgb, var(--color-warm) 60%, var(--color-border))',
              background: 'color-mix(in srgb, var(--color-surface) 86%, transparent)',
            }}
          >
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>
      </div>
    </form>
  )
}

export type { ContactFormErrors, ContactFormValues }
