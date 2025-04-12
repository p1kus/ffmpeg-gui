import { ReactElement } from 'react'
import styles from './configuration.module.css'
import PopoverDemo from '../popover/popover'
import { FfmpegConfigProvider } from '@renderer/ffmpegConfigContext'

export default function Configuration(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <FfmpegConfigProvider>
          <PopoverDemo></PopoverDemo>
        </FfmpegConfigProvider>
      </div>
    </div>
    // <div className={styles.controls}>
    // <label htmlFor="">
    // <input type="checkbox" name="" id="" />
    // Flip horizontal
  )
}
