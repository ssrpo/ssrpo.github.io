import type { ReactNode } from 'react'

export type SectionId =
  | 'about'
  | 'recommendations'
  | 'user-centered'
  | 'in-between'
  | 'current'
  | 'extender'
  | 'assistive-robotics'
  | 'engineering'
  | 'ecosystem'
  | 'cercle'
  | 'publications'
  | 'interests'

export const sectionLabels: Record<SectionId, string> = {
  about: 'What I do',
  recommendations: 'What They Say',
  'user-centered': 'User-Centered Development',
  'in-between': 'In the In-Between',
  current: 'Current Role',
  extender: 'Bloom Case Study',
  'assistive-robotics': 'Assistive & Medical Devices',
  engineering: 'Robotics Engineering',
  ecosystem: 'Engagements',
  cercle: 'Le Cercle des Robots Disparus',
  publications: 'Work & Writing',
  interests: 'Interests',
}

export const sectionPanelIds: Record<SectionId, string> = {
  about: 'about',
  recommendations: 'recommendations',
  'user-centered': 'user-centered',
  'in-between': 'in-between',
  current: 'current-work',
  extender: 'extender',
  'assistive-robotics': 'assistive-robotics',
  engineering: 'engineering',
  ecosystem: 'ecosystem',
  cercle: 'cercle',
  publications: 'publications',
  interests: 'interests',
}

export type NavGroup = {
  label: string
  sections: SectionId[]
}

export const navGroups: NavGroup[] = [
  {
    label: 'Profile',
    sections: ['about', 'recommendations', 'user-centered', 'publications'],
  },
  {
    label: 'Product & medtech',
    sections: ['current', 'extender', 'assistive-robotics'],
  },
  {
    label: 'Engineering background',
    sections: ['engineering'],
  },
  {
    label: 'Community',
    sections: ['ecosystem', 'cercle', 'interests'],
  },
]

export type SocialLink = {
  label: string
  href: string
  icon: ReactNode
}

export type PublicationItem = {
  title: string
  meta: string
  label?: string
  image: string
  href: string
}

export type PublicationGroup = {
  title: string
  description: string
  items: PublicationItem[]
}
