import type { CSSProperties } from 'react'
import type { ArticleCardProps } from '@/types/components'

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
      className="bg-[var(--card-base-color)] px-12 py-12 w-[20.5rem]"
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
      <div className="">
        <p className="leading-[1.5625rem] text-[0.9375rem] text-white/75">
          {description}
        </p>
      </div>
    </article>
  )
}
