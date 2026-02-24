import type { ReactNode } from 'react'

export type SectionId =
  | 'home'
  | 'about'
  | 'in-between'
  | 'current'
  | 'publications'
  | 'social-robotics'
  | 'interests'

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
