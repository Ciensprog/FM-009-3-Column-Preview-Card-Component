import type { CSSProperties } from 'react'
import type { ArticleCardProps } from '@/types/components'

import { defaultOnClick } from '@/utilities/default-mouse-events'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function ArticleCard({
  baseColor,
  description,
  icon,
  title,
}: ArticleCardProps) {
  return (
    <article
      className="bg-[var(--card-base-color)] flex flex-col px-12 py-12 max-w-[20.5rem] w-full tb:h-[31.25rem] tb:max-w-[19.1875rem]"
      style={
        {
          '--card-base-color': baseColor,
        } as CSSProperties
      }
    >
      <header className="text-[#F2F2F2]">
        <span className="flex h-10 items-center w-16">{icon}</span>
        <h2 className="font-big-shoulders-display font-bold mb-6 mt-9 text-[2.5rem] uppercase">
          {title}
        </h2>
      </header>
      <div className="flex flex-col h-full">
        <p className="leading-[1.5625rem] mb-[1.5625rem] text-[0.9375rem] text-white/75 tb:mb-auto">
          {description}
        </p>
        <a
          href="/#"
          className="bg-default border-2 border-transparent inline-block leading-[1.5625rem] outline-none px-8 py-2.5 ring-offset-2 ring-offset-[var(--card-base-color)] ring-white rounded-[1.5625rem] self-start text-[0.9375rem] text-[var(--card-base-color)] transition-colors hover:bg-transparent hover:border-white hover:text-white focus:ring-2"
          onClick={defaultOnClick}
        >
          Learn More<span className="sr-only">About {title}</span>
        </a>
      </div>
    </article>
  )
}
