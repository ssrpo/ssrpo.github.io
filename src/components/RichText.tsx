import type { MouseEvent } from 'react'
import type { Lang } from '../content/types'
import { pathFor } from '../site'

interface Props {
  text: string
  lang: Lang
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void
}

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g

export function RichText({ text, lang, onNavigate }: Props) {
  const out: Array<string | { label: string; href: string }> = []
  let last = 0
  for (const match of text.matchAll(LINK)) {
    const at = match.index ?? 0
    if (at > last) out.push(text.slice(last, at))
    out.push({ label: match[1], href: match[2] })
    last = at + match[0].length
  }
  if (last < text.length) out.push(text.slice(last))

  return (
    <>
      {out.map((part, i) => {
        if (typeof part === 'string') return part
        if (part.href.startsWith('#')) {
          const href = pathFor(lang, part.href.slice(1))
          return (
            <a key={i} href={href} onClick={(e) => onNavigate(e, href)}>
              {part.label}
            </a>
          )
        }
        return (
          <a key={i} href={part.href} target="_blank" rel="noreferrer">
            {part.label}
          </a>
        )
      })}
    </>
  )
}
