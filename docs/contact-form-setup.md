# Contact Form Setup

## Solution

This portfolio uses [Web3Forms](https://web3forms.com) for contact form submissions. The form uses a standard HTML form POST with a `redirect` parameter back to the site, so the contact form can send email without requiring a backend.

Default behaviour:

- The form posts to `https://api.web3forms.com/submit`
- After a successful submission, Web3Forms redirects back to the site with `?contact=success#contact`
- The success state is restored via the URL query parameter

Required setup:

1. Go to [web3forms.com](https://web3forms.com) and create a free account.
2. Verify your email address and get your access key.
3. Add the access key to a local `.env` file:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
```

4. Restart the dev server after updating `.env`.

## Notes

- The free plan allows 250 submissions per month.
- The form uses a standard browser POST — no CORS issues.
- The `redirect` parameter tells Web3Forms where to send the user after a successful submission.
- The access key is public in the client-side bundle (this is expected and safe for Web3Forms).
- No API keys, private tokens, or secrets are stored in this repo.

## Updating Later

- To change the Web3Forms endpoint, set `VITE_CONTACT_FORM_ENDPOINT` in your local `.env`.
- To change the email destination, update your Web3Forms account settings.
- If a resume PDF is added later, replace the placeholder in `src/components/sections/contact/ContactActionCards.tsx`.

