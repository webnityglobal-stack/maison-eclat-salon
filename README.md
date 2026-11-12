# Maison Éclat — Luxury Salon Frontend

Premium, immersive multi-page salon website built with React, Vite and Tailwind CSS. Visual direction: dark luxury, champagne gold, editorial typography and layered 3D-inspired effects.

## Pages
Home, Services (category filters), Service Details, Booking, Experience, Gallery, Contact.

## Features
- Responsive mobile/tablet/desktop layouts
- Full-bleed hero photography and editorial layouts
- 3D-inspired hover tilt, perspective image treatments, glass panels and layered accents using CSS
- Large section-scaled Playfair Display typography
- Service category filters and individual service detail pages
- Appointment request form with client-side confirmation
- Reusable Header, Footer, ServiceCard, context and data folders

## Run locally
```bash
npm install
npm run dev
```
Production build:
```bash
npm run build
```

## Structure
```text
src/
  components/ Header.jsx, Footer.jsx, ServiceCard.jsx
  context/ SalonContext.jsx
  data/ services.js
  pages/ Home.jsx, Services.jsx, ServiceDetails.jsx, Book.jsx,
         Experience.jsx, Gallery.jsx, Contact.jsx
  App.jsx
  main.jsx
  index.css
```

## Production notes
Brand identity, contact details, services and prices are demo content. Booking requests are held in frontend state only; connect an API/CRM and notification service for real appointments. Photography is loaded from Unsplash and requires internet access. 3D-inspired motion is CSS-based; no external 3D model or WebGL scene is required.
