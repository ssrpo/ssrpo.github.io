import type { PublicationGroup, SocialLink } from '../types/content'

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/susanasanchezr/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 9h3.96v12H3V9Zm7.5 0h3.8v1.64h.05c.53-1 1.83-2.04 3.77-2.04 4.03 0 4.78 2.65 4.78 6.1V21h-3.96v-5.64c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V21H10.5V9Z" />
      </svg>
    ),
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.fr/citations?user=YJdKzGAAAAAJ&hl=fr',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 10.5L5.2 9 12 5.5 18.8 9 12 13.5ZM6 16.5v2.1C6 20.99 8.69 22 12 22s6-1.01 6-3.4v-2.1l-6 3.2-6-3.2Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ssrpo',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.36-1.18-3.36-1.18-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.64-1.33-2.22-.26-4.56-1.11-4.56-4.95 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.69-4.57 4.94.36.32.69.94.69 1.9v2.82c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/mindful.lente',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5.25-3.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
]

export const getPublicationGroups = (baseUrl: string): PublicationGroup[] => [
  {
    title: 'Thesis & Academic',
    description: 'Foundational academic work.',
    items: [
      {
        title: 'PhD thesis (2018)',
        meta: 'Thesis · Robotics · 2018',
        label: 'PDF',
        image: `${baseUrl}phd.webp`,
        href: 'https://theses.hal.science/tel-01785574',
      },
    ],
  },
  {
    title: 'Articles & Writing',
    description: 'Long-form writing and essays.',
    items: [
      {
        title: 'Heart Robotics (Medium)',
        meta: 'Article · Medium',
        label: 'Article',
        image: `${baseUrl}heart.png`,
        href: 'https://heart-robotics.medium.com/',
      },
      {
        title: 'Collaborer avec la machine',
        meta: 'Article · FNAC',
        label: 'Book page',
        image: `${baseUrl}fnac.jpg`,
        href: 'https://www.fnac.com/a14942090/Anne-Sophie-Dubey-Collaborer-avec-la-machine-quels-changements-pour-l-operateur',
      },
    ],
  },
  {
    title: 'Talks & Slides',
    description: 'Talks and slide decks.',
    items: [
      {
        title: 'Robotique collaborative (SlideShare)',
        meta: 'Slides · SlideShare',
        label: 'Slides',
        image: `${baseUrl}slides.png`,
        href: 'https://www.slideshare.net/La_Fabrique_Industrie/la-robotique-collaborative-comme-moyen-de-soulager-loprateur',
      },
    ],
  },
  {
    title: 'Videos',
    description: 'Video entry points.',
    items: [
      {
        title: 'YouTube channel',
        meta: 'Video · YouTube',
        label: 'Channel',
        image: 'https://i.ytimg.com/vi/TJucS00rqnA/hqdefault.jpg',
        href: 'https://youtube.com/@SusanaSanchezRestrepo',
      },
      {
        title: "Prix La Fabrique de l'industrie",
        meta: 'Video · YouTube',
        label: 'Webinar',
        image: 'https://i.ytimg.com/vi/0AzRyneaVMY/hqdefault.jpg',
        href: 'https://www.youtube.com/watch?v=0AzRyneaVMY',
      },
    ],
  },
]
