import { ReactElement, useState } from 'react'
import RunFFmpeg from './runFFmpeg/runFFmpeg'
import FilePicker from './filePicker/filePicker'

export default function FFmpegConverter(): ReactElement {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([])
  return (
    <div>
      <FilePicker selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}></FilePicker>
      <RunFFmpeg selectedFiles={selectedFiles}></RunFFmpeg>
    </div>
  )
}
