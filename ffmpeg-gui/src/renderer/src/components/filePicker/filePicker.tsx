import { ReactElement } from 'react'
import styles from '../button.module.css'
import { PlusIcon } from '../icons/plusIcon'
import { Virtuoso } from 'react-virtuoso'

interface filePropsType {
  selectedFiles?: string[]
  setSelectedFiles: React.Dispatch<React.SetStateAction<string[]>>
}

export default function FilePicker({
  selectedFiles,
  setSelectedFiles
}: filePropsType): ReactElement {
  const handleFilePicker = async (): Promise<void> => {
    try {
      const result = await window.electronAPI.openFileDialog()
      if (!result.canceled) {
        setSelectedFiles(result.filePaths)
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
      {selectedFiles && (
        <div>
          <h3>Selcted files:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>
        </div>
      )}
      {/* <button onClick={clearSelected}>Clear</button> */}
    </div>
  )
}
