import * as React from 'react'
import { Toggle } from 'radix-ui'
import styles from './toggle.module.css'

interface toggleBtnProps {
  onClick: () => void
  pressed?: boolean
  label: string
  children: React.ReactNode
}

const ToggleBtn = ({ onClick, pressed = false, children }: toggleBtnProps): React.ReactElement => (
  <Toggle.Root
    className={styles.Toggle}
    aria-label="Toggle italic"
    onPressedChange={onClick}
    pressed={pressed}
  >
    {children}
  </Toggle.Root>
)

export default ToggleBtn
