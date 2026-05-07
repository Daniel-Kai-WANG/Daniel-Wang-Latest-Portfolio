# Contact Form Setup

## Solution

This portfolio uses the FormSubmit AJAX endpoint so the contact form can send email without redirecting away from the current page.

Default behaviour:

- The app falls back to `https://formsubmit.co/ajax/kaiwang2027@gmail.com`
- This keeps the current page in place and lets the UI show loading, success, and error states

Recommended behaviour:

1. Create or confirm the FormSubmit destination for `kaiwang2027@gmail.com`.
2. If FormSubmit gives you a custom endpoint token, add it to a local `.env` file:

```bash
VITE_FORMSUBMIT_ENDPOINT=https://formsubmit.co/ajax/your-formsubmit-endpoint
```

3. Restart the dev server after updating `.env`.

## Notes

- The first live submission to a new FormSubmit destination may require email confirmation.
- The client checks both the HTTP status and the returned `success` field because FormSubmit can return HTTP `200` with a logical failure message.
- No API keys, private tokens, or secrets are stored in this repo.
- The recipient email is already public in the portfolio contact section, so the fallback endpoint does not introduce a new secret.
- Do not point `VITE_FORMSUBMIT_ENDPOINT` at a temporary localhost mock endpoint unless that local service is running. A stale local override will fail in-browser.

## Updating Later

- To change the destination, update the email entry in [src/data/profile.ts](/Users/danielwang/Projects/code/daniel-wang-workflow-portfolio-ai-tech-contact/src/data/profile.ts).
- To move away from the fallback email-based endpoint, update `VITE_FORMSUBMIT_ENDPOINT` in your local `.env`.
- If a resume PDF is added later, replace the placeholder in [src/components/sections/contact/ContactActionCards.tsx](/Users/danielwang/Projects/code/daniel-wang-workflow-portfolio-ai-tech-contact/src/components/sections/contact/ContactActionCards.tsx).
