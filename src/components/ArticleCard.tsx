import type { CSSProperties } from 'react'
import type { ArticleCardProps } from '@/types/components'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function ArticleCard({ baseColor, title }: ArticleCardProps) {
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
        <h2 className="font-big-shoulders-display font-bold text-[2.5rem] uppercase">
          {title}
        </h2>
      </header>
    </article>
  )
}
