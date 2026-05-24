import type { FormEvent } from 'react'
import { useTheme } from '../../../hooks/useTheme'
import { getPrimaryCtaStyle } from '../../common/primaryCta'

type ContactFormValues = {
  email: string
  message: string
  name: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

type ContactFormProps = {
  action: string
  errorMessage: string | null
  errors: ContactFormErrors
  isSubmitting: boolean
  method: 'post'
  onChange: (field: keyof ContactFormValues, value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  values: ContactFormValues
}

const fieldClassName =
  'w-full rounded-[1.2rem] border px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--color-primary)_22%,transparent)]'

const fieldGroupClassName = 'relative grid gap-2 items-start pb-7'

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null
  }

  return (
    <p
      aria-live="polite"
      className="pointer-events-none absolute bottom-0 left-0 text-sm leading-5 text-[#dc2626]"
    >
      {message}
    </p>
  )
}

export function ContactForm({
  action,
  errorMessage,
  errors,
  isSubmitting,
  method,
  onChange,
  onSubmit,
  values,
}: ContactFormProps) {
  const { theme } = useTheme()

  return (
    <form
      noValidate
      action={action}
      method={method}
      onSubmit={onSubmit}
      className="grid gap-4"
    >
      <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? ''} />
      <input type="hidden" name="subject" value="New inquiry from daniel-wang-portfolio" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className={fieldGroupClassName}>
          <span className="text-sm font-semibold text-[var(--color-text)]">Your Name or Company</span>
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
            placeholder="Your Name or Company"
            aria-invalid={Boolean(errors.name)}
          />
          <FieldError message={errors.name} />
        </label>

        <label className={fieldGroupClassName}>
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
            placeholder="Your Email"
            aria-invalid={Boolean(errors.email)}
          />
          <FieldError message={errors.email} />
        </label>
      </div>

      <label className={fieldGroupClassName}>
        <span className="text-sm font-semibold text-[var(--color-text)]">Message</span>
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
          placeholder="Tell me about the role, team, or opportunity..."
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
          className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-[background,color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:brightness-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
          style={getPrimaryCtaStyle(theme)}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Contact Right Now'}
        </button>
      </div>
    </form>
  )
}

export type { ContactFormErrors, ContactFormValues }
