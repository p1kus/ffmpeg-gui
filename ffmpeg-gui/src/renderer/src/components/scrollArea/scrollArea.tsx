import * as React from 'react'
import { ScrollArea } from 'radix-ui'
import styles from './scrollArea.module.css'
import { StackIcon } from '@radix-ui/react-icons'

const ScrollAreaComponent = ({
  selectedFiles
}: {
  selectedFiles: string[]
}): React.ReactElement => (
  <ScrollArea.Root className={styles.Root}>
    <ScrollArea.Viewport className={styles.Viewport}>
      <div style={{ padding: '15px 20px' }}>
        <div className={styles.Text}>
          <StackIcon></StackIcon>
          Selected files
          {selectedFiles.length}
        </div>
        {selectedFiles.map((file) => (
          <div className={styles.Tag} key={`key_${file}`}>
            {file};
          </div>
        ))}
      </div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar className={styles.Scrollbar} orientation="vertical">
      <ScrollArea.Thumb className={styles.Thumb} />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar className={styles.Scrollbar} orientation="horizontal">
      <ScrollArea.Thumb className={styles.Thumb} />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner className={styles.Corner} />
  </ScrollArea.Root>
)

export default ScrollAreaComponent
