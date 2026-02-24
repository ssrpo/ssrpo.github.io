import type { ReactNode } from 'react'

export type SectionId =
  | 'about'
  | 'in-between'
  | 'current'
  | 'publications'
  | 'social-robotics'
  | 'interests'

export const sectionLabels: Record<SectionId, string> = {
  about: 'About',
  'in-between': 'In the In-Between',
  current: 'Current role',
  publications: 'Publications',
  'social-robotics': 'Social robotics',
  interests: 'Interests',
}

export const sectionPanelIds: Record<SectionId, string> = {
  about: 'about',
  'in-between': 'in-between',
  current: 'current-work',
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
