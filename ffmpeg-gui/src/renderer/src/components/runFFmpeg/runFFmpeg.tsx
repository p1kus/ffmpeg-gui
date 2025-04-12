import { ReactElement, useState } from 'react'
import styles from '../button.module.css'

interface filePropsType {
  selectedFiles: string[]
}

export default function RunFFmpeg(selectedFiles: filePropsType): ReactElement {
  const [output, setOutput] = useState('')

  const handleRunFFmpeg = async (): Promise<void> => {
    try {
      const inputFile = selectedFiles.selectedFiles[0] || 'test.jpg'
      console.log(inputFile)
      const outputFile = inputFile.replace(/\.[^/.]+$/, '') + '_converted.jpg'
      console.log(outputFile)
      const result = await window.electronAPI.runFFmpeg(inputFile, outputFile, [
        `-vf`,
        'transpose=0'
      ])
      setOutput(result)
      console.log('FFmpeg output:', output)
    } catch (error) {
      console.error('FFmpeg error:', error)
    }
  }

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleRunFFmpeg}>
        Convert
      </button>
      <pre>{output}</pre>
    </div>
  )
}
