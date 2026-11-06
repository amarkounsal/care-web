# CanRise Education and Immigration

A responsive React + TypeScript website built with Vite.

## Development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run build
npm run lint
npx playwright install chromium
# With the development server running:
npx playwright test
```

## Enquiries

The enquiry form validates the student's name, email, study interest, and consent. It opens WhatsApp addressed to **+1 647 952 0964**, with their details in an editable message. The visitor must press Send in WhatsApp. A fallback link appears if the browser blocks the new tab. No backend is needed and no enquiry data is stored by the website.

Confirm the business number is registered on WhatsApp before publishing. The click-to-call links work independently of WhatsApp.

## Content and assets

- Update website content and phone/WhatsApp links in `src/App.tsx`.
- Styles live in `src/App.css` and `src/index.css`.
- Local photographs in `public/images` are from Unsplash.
- Typography uses DM Sans and Manrope from Google Fonts with system fallbacks.
- No school partnerships, accreditation, admission guarantees, or immigration credentials are claimed.

## Deployment

Run `npm run build` and publish the generated `dist` directory to a static website host. `npm run preview` serves the production build locally.
# care-web
