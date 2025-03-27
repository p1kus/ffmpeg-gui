import { ReactElement, useState } from 'react'

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
      const result = await window.electronAPI.runFFmpeg(inputFile, outputFile)
      setOutput(result)
      console.log('FFmpeg output:', output)
    } catch (error) {
      console.error('FFmpeg error:', error)
    }
  }

  return (
    <div>
      <button onClick={handleRunFFmpeg}>Convert Image</button>
      <pre>{output}</pre>
    </div>
  )
}
