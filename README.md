# IshConnect

IshConnect is a Rwandan engineering studio and academy building reliable digital products across Africa.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint

# Format
npm run format

# Type check
npm run typecheck
```

## Project Structure

```
/app                    Next.js App Router
  /(routes)             Route definitions
/components
  /site                 Page-level components
  /ui                   Reusable UI primitives (shadcn)
/lib                    Utilities and data
/hooks                  Custom React hooks
/types                  TypeScript type definitions
/styles                 Global styles
/public                 Static assets
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `EMAILJS_SERVICE_ID` - EmailJS service ID
- `EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `EMAILJS_PUBLIC_KEY` - EmailJS public key

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## License

All rights reserved. © IshConnect (IshConnLab)
