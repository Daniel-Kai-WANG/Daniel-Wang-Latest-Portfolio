import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import { useTheme } from '../../hooks/useTheme'
import { Reveal } from '../animation/Reveal'
import { ContactActionCards } from './contact/ContactActionCards'
import { ContactSectionAccent } from './contact/ContactSectionAccent'
import { ContactForm, type ContactFormErrors, type ContactFormValues } from './contact/ContactForm'
import { ContactSuccessState } from './contact/ContactSuccessState'
import { ContactTitleCluster } from './contact/ContactTitleCluster'
import { loadSuccessAnimation } from './contact/successAnimation'

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
}

type FormSubmitResponse = {
  message?: string
  success?: boolean | string
}

function validateForm(values: ContactFormValues) {
  const errors: ContactFormErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please add a short message or project inquiry.'
  }

  return errors
}

function resolveFormEndpoint(recipientEmail: string) {
  const envEndpoint = import.meta.env.VITE_FORMSUBMIT_ENDPOINT?.trim()

  if (envEndpoint) {
    return envEndpoint
  }

  return `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`
}

export function ContactSection() {
  const { theme } = useTheme()
  const emailLink = profile.contactLinks.find((link) => link.label === 'Email')
  const githubLink = profile.contactLinks.find((link) => link.label === 'GitHub')
  const linkedinLink = profile.contactLinks.find((link) => link.label === 'LinkedIn')
  const recipientEmail = emailLink?.value ?? 'kaiwang2027@gmail.com'
  const formEndpoint = resolveFormEndpoint(recipientEmail)

  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [successAnimationData, setSuccessAnimationData] = useState<object | null>(null)

  useEffect(() => {
    let isMounted = true

    void loadSuccessAnimation(theme)
      .then((animation) => {
        if (isMounted) {
          setSuccessAnimationData(animation)
        }
      })
      .catch(() => {
        if (isMounted) {
          setSuccessAnimationData(null)
        }
      })

    return () => {
      isMounted = false
    }
  }, [theme])

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setErrorMessage(null)
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setErrorMessage(null)
    setIsSuccess(false)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateForm(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const formData = new FormData()
      formData.append('name', values.name.trim())
      formData.append('email', values.email.trim())
      formData.append('message', values.message.trim())
      formData.append('_subject', 'New inquiry from daniel-wang-portfolio')
      formData.append('_template', 'table')
      formData.append('_captcha', 'false')
      formData.append('_replyto', values.email.trim())

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })
      const result = (await response.json().catch(() => null)) as FormSubmitResponse | null
      const isSuccessful = result?.success === true || result?.success === 'true'

      if (!response.ok || !isSuccessful) {
        throw new Error(result?.message || 'The contact request could not be sent.')
      }

      setIsSuccess(true)
      setValues(initialValues)
      setErrors({})
    } catch (error) {
      const fallbackMessage =
        'Something went wrong while sending your message. Please try again in a moment or email me directly.'

      setErrorMessage(error instanceof Error ? error.message || fallbackMessage : fallbackMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Reveal>
      <section
        id="contact"
        className="relative overflow-hidden rounded-[2.25rem] border px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
        style={{
          background: 'color-mix(in srgb, var(--color-surface) 94%, transparent)',
          borderColor: 'var(--color-border)',
          boxShadow: 'var(--surface-shadow)',
        }}
      >
        <ContactSectionAccent />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="relative mx-auto max-w-[24rem] px-7 text-center sm:max-w-[30rem] sm:px-8">
            <ContactTitleCluster />
            <h2 className="relative z-10 mx-auto text-center font-display text-[1.9rem] font-bold tracking-[-0.05em] text-[var(--color-text)] sm:text-[2.35rem] lg:text-[2.6rem]">
              Ready to build a reliable product flow.
            </h2>
          </div>

          <div
            className="mt-8 overflow-hidden rounded-[1.9rem] border p-5 sm:p-6"
            style={{
              borderColor: 'var(--color-border)',
              background: 'color-mix(in srgb, var(--color-surface) 92%, transparent)',
            }}
          >
            <div className="relative z-10">
              {isSuccess ? (
                <ContactSuccessState animationData={successAnimationData} onReset={resetForm} />
              ) : (
                <ContactForm
                  errorMessage={errorMessage}
                  errors={errors}
                  isSubmitting={isSubmitting}
                  onChange={updateField}
                  onSubmit={handleSubmit}
                  values={values}
                />
              )}
            </div>
          </div>

          <div className="mt-4">
            <ContactActionCards
              emailLink={emailLink}
              githubLink={githubLink}
              linkedinLink={linkedinLink}
            />
          </div>
        </div>
      </section>
    </Reveal>
  )
}
