import { ReactElement } from 'react'
import styles from '../button.module.css'
import { PlusIcon } from '../icons/plusIcon'

export interface filePropsType {
  selectedFiles?: string[]
  setSelectedFiles: React.Dispatch<React.SetStateAction<string[]>>
}

export default function FilePicker({ setSelectedFiles }: filePropsType): ReactElement {
  const handleFilePicker = async (): Promise<void> => {
    try {
      const result = await window.electronAPI.openFileDialog()
      if (!result.canceled) {
        const filenames = await window.electronAPI.getFilenames(result.filePaths)
        setSelectedFiles(filenames)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleFilePicker}>
        Add files
        <PlusIcon></PlusIcon>
      </button>
    </div>
  )
}
