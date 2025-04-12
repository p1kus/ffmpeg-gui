import * as React from 'react'
import { Popover } from 'radix-ui'
import {
  MixerHorizontalIcon,
  Cross2Icon,
  RotateCounterClockwiseIcon,
  FileIcon,
  DimensionsIcon
} from '@radix-ui/react-icons'
import styles from './popover.module.css'
import ToggleBtn from '../toggle/toggle'
import { useFfmpegConfig } from '@renderer/ffmpegConfigContext'

const PopoverDemo = (): React.ReactElement => {
  const { config, setConfig } = useFfmpegConfig()

  const toggleRotate = (): void => {
    console.log(config)
    setConfig((prev) => ({
      ...prev,
      rotate: {
        enabled: !prev.rotate?.enabled
      }
    }))
  }
  return (
    <Popover.Root>
      <Popover.Trigger asChild className={styles.Trigger}>
        <button className={styles.IconButton} aria-label="Update dimensions">
          <MixerHorizontalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.Content} sideOffset={5}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p className={styles.Text} style={{ marginBottom: 10 }}>
              Settings
            </p>
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="width">
                Rotate
              </label>
              <ToggleBtn onClick={toggleRotate} pressed={config.rotate?.enabled} label="Rotate">
                <RotateCounterClockwiseIcon></RotateCounterClockwiseIcon>
              </ToggleBtn>
              <ToggleBtn onClick={toggleRotate} pressed={config.rotate?.enabled} label="Rotate">
                <RotateCounterClockwiseIcon
                  style={{ transform: 'rotateY(180deg)' }}
                ></RotateCounterClockwiseIcon>
              </ToggleBtn>
            </fieldset>
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="maxWidth">
                Compression
              </label>
              <ToggleBtn onClick={toggleRotate} pressed={config.rotate?.enabled} label="Rotate">
                <RotateCounterClockwiseIcon></RotateCounterClockwiseIcon>
              </ToggleBtn>
            </fieldset>
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="height">
                Resolution
              </label>
              <ToggleBtn onClick={toggleRotate} pressed={config.rotate?.enabled} label="Rotate">
                <DimensionsIcon></DimensionsIcon>
              </ToggleBtn>
            </fieldset>
            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="maxHeight">
                Format
              </label>
              <ToggleBtn onClick={toggleRotate} pressed={config.rotate?.enabled} label="Rotate">
                <FileIcon></FileIcon>
              </ToggleBtn>
            </fieldset>
          </div>
          <Popover.Close className={styles.Close} aria-label="Close">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className={styles.Arrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default PopoverDemo
