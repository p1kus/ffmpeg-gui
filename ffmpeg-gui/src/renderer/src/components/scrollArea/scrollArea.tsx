import * as React from 'react'
import { ScrollArea } from 'radix-ui'
import styles from './scrollArea.module.css'
import { Cross1Icon, StackIcon } from '@radix-ui/react-icons'
import { filePropsType } from '../filePicker/filePicker'

const ScrollAreaComponent = ({
  selectedFiles = [],
  setSelectedFiles
}: filePropsType): React.ReactElement => {
  const removeFile = (fileIndex: number): void => {
    const modifiedFiles = selectedFiles.toSpliced(fileIndex, 1)
    setSelectedFiles(modifiedFiles)
  }
  return (
    <ScrollArea.Root className={styles.Root}>
      <ScrollArea.Viewport className={styles.Viewport}>
        <div style={{ padding: '15px 20px' }}>
          <div className={styles.Text}>
            <StackIcon></StackIcon>
            Selected files {`[${selectedFiles.length}]`}
          </div>
          {selectedFiles.map((file, index) => (
            <div className={styles.Tag} key={`${index}_${file}`}>
              {file}
              <div className={styles.TagControls}>
                <button onClick={() => removeFile(index)}>
                  <Cross1Icon></Cross1Icon>
                </button>
              </div>
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
}

export default ScrollAreaComponent
