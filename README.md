# My portfolio

This is my personal site. I'm Sanjana, a backend / SDE engineer, and this is
where I put my work, experience, and the projects I'm proud of.

The whole thing is built around a systems theme, since that's what I do. Think
blueprint grid, a little live architecture diagram in the header, and everything
laid out like something you'd actually deploy.

## What it's built with

React 19 and Vite for the app, Tailwind v4 for styling, GSAP for the scroll
animations, and EmailJS to make the contact form actually send me something.

## Running it locally

You'll need Node installed. Then:

```bash
npm install
npm run dev
```

That starts it at http://localhost:5173.

## The contact form

The form uses EmailJS, so it needs three keys. Make a file called `.env` in the
project root (it's git-ignored, so it won't get committed) and drop these in:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

The same three need to live in the Vercel project settings for the live site.

## Shipping it

```bash
npm run build
```

It's hosted on Vercel, and a push to the main branch redeploys it on its own.
