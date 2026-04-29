import type { ReactNode } from 'react'

export type SectionId =
  | 'about'
  | 'recommendations'
  | 'user-centered'
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
  'user-centered': 'User-Centered Development',
  'in-between': 'In the In-Between',
  current: 'Current Role',
  'industrial-robotics': 'Industrial Robotics',
  'assistive-robotics': 'Assistive & Medical Devices',
  ecosystem: 'Engagements',
  cercle: 'Le Cercle des Robots Disparus',
  publications: 'Publications',
  'social-robotics': 'Human-Robot Interaction',
  interests: 'Interests',
}

export const sectionPanelIds: Record<SectionId, string> = {
  about: 'about',
  recommendations: 'recommendations',
  'user-centered': 'user-centered',
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
