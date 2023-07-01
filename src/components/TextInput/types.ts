export type Props = {
  value: string
  onChange: (text: string) => void
  autoFocus?: boolean
  maxLength?: number
  onPressEnter?: () => void
  onPressEscape?: () => void
}
