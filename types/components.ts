import type { ReactNode } from 'react'

/*
|-------------------------------------------------------------------------------
| Definitions
|-------------------------------------------------------------------------------
*/

export type ArticleCardProps = {
  baseColor: `#${string}`
  description: string
  icon: ReactNode
  title: string
}
