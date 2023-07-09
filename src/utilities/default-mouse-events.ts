import type { MouseEvent } from 'react'

/*
|-------------------------------------------------------------------------------
| Utilities
|-------------------------------------------------------------------------------
*/

export function defaultOnClick(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}
