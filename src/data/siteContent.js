import { videos } from '@assets/media';

export const siteContent = {
  brand: {
    name: 'Zhang',
    tagline: 'Industrial Property Consultants',
  },
  theme: {
    primary: '#0b0b0c',
    surface: '#111214',
    text: '#ffffff',
    accent: '#d61f26',
  },
  hero: {
    tagline: 'FOR THOSE WHO BUILD',
    headline: 'We Are Realising The Promise Of Industrial Real Estate In The Country',
    ctaLabel: 'Contact →',
    videoSrc: videos.hero,
    overlayGradient: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.75))',
  },
  capabilities: [
    {
      title: 'We Build',
      description:
        'Design–build industrial facilities engineered for speed, safety, and scalability.',
      icon: 'build'
    },
    {
      title: 'We Lease',
      description:
        'Flexible Grade‑A warehousing and manufacturing spaces across strategic locations.',
      icon: 'lease'
    },
    {
      title: 'We Maintain',
      description:
        'End‑to‑end facility management to keep your operations running 24/7.',
      icon: 'maintain'
    }
  ],
  sectors: [
    'Industrial Manufacturing',
    'Warehousing & Logistics',
    'Cold Storage'
  ]
}
