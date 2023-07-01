import { ReactNode } from 'react'

export type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  text?: string
  children?: ReactNode
  className?: string
}
