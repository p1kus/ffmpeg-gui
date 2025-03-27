import { ReactElement } from 'react'

interface filePropsType {
  selectedFiles: string[]
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
  const clearSelected = (): void => {
    selectedFiles.length = 0
    console.log(selectedFiles)
  }

  return (
    <div>
      <button onClick={handleFilePicker}>Upload files</button>
      {selectedFiles.length > 0 && (
        <div>
          <h3>Selcted files:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={clearSelected}>Clear</button>
    </div>
  )
}
