# SNET — Network & Security Solutions Website

A fully responsive marketing website built with **Vite + React + Tailwind CSS**,
featuring page-transition and scroll-reveal animations via **Framer Motion**.

## Folder structure

```
snet-website/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx            # Routing (react-router-dom) + page transitions
    ├── index.css          # Theme (Tailwind layers, colors, utility classes)
    ├── data/
    │   └── content.js      # All site copy — services, solutions, products, etc.
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── WhatsAppButton.jsx
    │   ├── ScrollToTop.jsx
    │   ├── PageHero.jsx
    │   ├── ServiceCard.jsx
    │   ├── CtaBand.jsx
    │   └── Reveal.jsx      # Scroll-reveal animation wrapper
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Solutions.jsx
        ├── Products.jsx
        ├── Contact.jsx
        └── NotFound.jsx
```

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Customizing

- **Brand details** (phone, WhatsApp, email, address): edit `src/data/content.js`.
- **Colors / fonts**: edit `tailwind.config.js` and the Google Fonts link in `index.html`.
- **Services / Solutions / Products copy**: all arrays live in `src/data/content.js`.
- **Contact form**: currently client-side only (shows a success state). Wire the
  `handleSubmit` function in `src/pages/Contact.jsx` to your backend or a service
  like Formspree/EmailJS to actually deliver messages.
