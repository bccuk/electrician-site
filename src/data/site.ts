// EXAMPLE / REFERENCE FILE — not currently imported.
//
// Shows how the SAME barber-site template re-skins for an electrician
// (or any callout trade) by editing only this data file. Demonstrates
// the flexibility of the request form and status banner — the components
// don't change, only the config.
//
// To use this for a real customer:
//   1. Rename to `site.ts` (replacing the existing one)
//   2. Replace the 8 barber photos in public/images/0-7.webp with
//      trade-specific shots (van, work-in-progress, finished jobs)
//   3. Update the favicon if you want a tools/spanner motif
//
// All names, addresses, phones, and reviews here are fictional.

export const site = {
  name: 'Volt & Co. Electrical',
  shortName: 'Volt & Co.',
  tagline: 'Domestic & Commercial Electrical · Kent',
  location: 'Dartford',
  established: 2015,
  description:
    "Domestic and commercial electricians covering Dartford, Bexley, Sidcup and across Kent. Same-day callouts, 24-hour emergency service, full EICR & rewire work.",
  seo: {
    title: 'Volt & Co. Electrical — Dartford | Domestic & Commercial Electricians',
    description:
      "NICEIC-approved electricians in Dartford. Same-day callouts, fault-finding, fuse-board upgrades, EICR, rewires. 4.9 stars from 87 Google reviews.",
  },
  rating: {
    score: 4.9,
    count: 87,
    source: 'Google',
  },
  contact: {
    phone: '07700 900100',
    phoneHref: 'tel:+447700900100',
    whatsapp: '+44 7700 900100',
    whatsappHref: 'https://wa.me/447700900100',
    email: 'work@voltandco.co.uk',
    address: {
      line1: 'Unit 4, Trade Park',
      city: 'Dartford',
      postcode: 'DA1 5BB',
      country: 'United Kingdom',
    },
    instagram: '@voltandco',
    instagramUrl: 'https://instagram.com/voltandco',
    facebookUrl: 'https://facebook.com/voltandco',
    googleMapsEmbed:
      'https://www.google.com/maps?q=Dartford+Kent&output=embed',
    googleMapsLink: 'https://maps.google.com/?q=Dartford+Kent',
  },

  // Status banner shows their current availability — owner-updated weekly.
  // Trades benefit hugely from this — sets honest expectations upfront.
  status: {
    enabled: true,
    emoji: '🟢',
    text: 'Booking 1–2 weeks ahead · 24-hour emergency callouts',
  },

  // Request form — `callout` mode shows urgency picker AND address field.
  // Same component as the barber site, just different config.
  request: {
    eyebrow: 'Get a quote',
    heading: 'Tell us about the job.',
    intro:
      "Quick details and we'll get back to you with a quote — usually within a few hours. Emergency? Call us directly on the number above.",
    ctaLabel: 'Request a callout',
    submitLabel: 'Send job details',
    type: 'callout' as const,
    fields: {
      service: true,
      preferredTime: true,
      urgency: true,    // ← turned ON for trades
      address: true,    // ← turned ON for callout work
      notes: true,
    },
    formspreeEndpoint: 'https://formspree.io/f/xbdwkvqj',
    submitSubject: 'New job request — Volt & Co. Electrical',
  },

  hours: [
    { day: 'Monday', hours: '08:00 – 18:00' },
    { day: 'Tuesday', hours: '08:00 – 18:00' },
    { day: 'Wednesday', hours: '08:00 – 18:00' },
    { day: 'Thursday', hours: '08:00 – 18:00' },
    { day: 'Friday', hours: '08:00 – 18:00' },
    { day: 'Saturday', hours: '09:00 – 14:00' },
    { day: 'Sunday', hours: 'Emergency only' },
  ],
  services: [
    { name: 'Standard Callout', price: 65, description: 'Up to 1 hour on site, fault-finding & minor works.', duration: 'within 24h' },
    { name: 'Emergency Callout', price: 95, description: 'Same-day or out-of-hours.', duration: 'within 4h' },
    { name: 'Consumer Unit Upgrade', price: 450, description: 'Modern RCBO board, full certification.', duration: '1 day', featured: true },
    { name: 'EICR (3-bed home)', price: 180, description: 'Full electrical inspection & report.', duration: '½ day' },
    { name: 'EV Charger Install', price: 850, description: 'Type 2 home charger, OZEV-eligible.', duration: '½ day' },
    { name: 'Full Rewire (3-bed)', price: 4200, description: 'Quoted from. Includes plastering & certification.', duration: '5–7 days' },
    { name: 'Sockets & Lighting', price: 75, description: 'Per outlet, including chase & make-good.', duration: 'same day' },
    { name: 'Smart Home Setup', price: 250, description: 'From — Hue, Sonos, smart switches.', duration: '½ day' },
  ],
  about: {
    eyebrow: 'About the team',
    heading: "NICEIC-approved electricians, ten years on the road.",
    body: [
      "Volt & Co. has been wiring homes and small businesses across Kent since 2015. NICEIC-approved, fully insured, and proper old-school: a clean job, a tidy site, and a clear quote up front.",
      "Whether it's a flickering light, a full rewire, or your first EV charger, we'll come out, take a look, and tell you what's actually needed. No upsells, no surprise call-out fees.",
    ],
    bullets: [
      'NICEIC-approved · Public liability £5m',
      'Same-day quotes · 24-hour emergency line',
      'All work certified & guaranteed for 12 months',
    ],
  },
  testimonials: [
    {
      quote: 'Same-day callout for a tripping board. Diagnosed and fixed within the hour. Reasonable price too.',
      author: 'Helen S.',
    },
    {
      quote: "Replaced my old fuse box and added two extra sockets. Tidy work, certificates emailed within an hour. Will use again.",
      author: 'Mark T.',
    },
    {
      quote: 'Honest quote, turned up when they said they would, took dust sheets and cleaned up. Rare to find these days.',
      author: 'Priya K.',
    },
    {
      quote: 'Fitted our EV charger and walked us through the OZEV grant claim. Painless.',
      author: 'David W.',
    },
    {
      quote: 'Did our EICR for the rental — fast, clear report, fixed two minor issues on the spot.',
      author: 'Aisha R.',
    },
  ],
  hero: {
    images: [
      { src: 'images/0.webp', alt: 'Electrician working on a consumer unit' },
      { src: 'images/1.webp', alt: 'Branded van outside a customer property' },
      { src: 'images/2.webp', alt: 'Detailed wiring work close-up' },
    ],
  },
  gallery: [
    { src: 'images/3.webp', label: 'Consumer Unit Upgrades', alt: 'Recent fuse-board upgrade' },
    { src: 'images/4.webp', label: 'EV Chargers', alt: 'EV charger install' },
    { src: 'images/5.webp', label: 'Rewires', alt: 'Full rewire in progress' },
    { src: 'images/6.webp', label: 'Smart Lighting', alt: 'Smart lighting install' },
    { src: 'images/7.webp', label: 'Commercial Work', alt: 'Commercial unit rewire' },
  ],
  bookingNote: 'Call us directly for emergency callouts.',
} as const;

export type Service = (typeof site.services)[number];
