import type { ReactNode } from 'react'

export type SectionId =
  | 'about'
  | 'recommendations'
  | 'in-between'
  | 'current'
  | 'industrial-robotics'
  | 'assistive-robotics'
  | 'ecosystem'
  | 'cercle'
  | 'publications'
  | 'social-robotics'
  | 'interests'

export const sectionLabels: Record<SectionId, string> = {
  about: 'What I do',
  recommendations: 'What They Say',
  'in-between': 'In the In-Between',
  current: 'Current role',
  'industrial-robotics': 'Industrial robotics',
  'assistive-robotics': 'Assistive robotics',
  ecosystem: 'Engagements',
  cercle: 'Le cercle des robots disparus',
  publications: 'Publications',
  'social-robotics': 'Social robotics',
  interests: 'Interests',
}

export const sectionPanelIds: Record<SectionId, string> = {
  about: 'about',
  recommendations: 'recommendations',
  'in-between': 'in-between',
  current: 'current-work',
  'industrial-robotics': 'industrial-robotics',
  'assistive-robotics': 'assistive-robotics',
  ecosystem: 'ecosystem',
  cercle: 'cercle',
  publications: 'publications',
  'social-robotics': 'social-robotics',
  interests: 'interests',
}

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
