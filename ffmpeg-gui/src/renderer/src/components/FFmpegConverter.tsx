import { ReactElement, useState } from 'react'
import RunFFmpeg from './runFFmpeg/runFFmpeg'
import FilePicker from './filePicker/filePicker'
import Configuration from './configuration/configuration'
import styles from './FFmpegConverter.module.css'
import { HorizontalLine } from './horizontalLine/horizontalLine'
import ScrollAreaComponent from './scrollArea/scrollArea'

// interface configType {
//   rotate?: {
//     enabled: boolean
//   }
//   compress?: {
//     enabled: boolean
//   }
//   extension: {
//     extension: 'jpg' | 'png' | 'webp'
//   }
// }
export default function FFmpegConverter(): ReactElement {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([])

  return (
    <div className={styles.container}>
      <div className={styles.fileContainer}>
        <div className={styles.fileContainerTitle}>
          <h3>FFmpeg converter</h3>
          <HorizontalLine></HorizontalLine>
        </div>
        {selectedFiles.length === 0 && <p>Add image or video files</p>}
        <FilePicker setSelectedFiles={setSelectedFiles}></FilePicker>
        {selectedFiles.length > 0 && (
          <ScrollAreaComponent
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
          ></ScrollAreaComponent>
        )}
        {selectedFiles.length > 0 && (
          <div className={styles.runBtn}>
            <HorizontalLine></HorizontalLine>
            <div className={styles.runBtnWithConfig}>
              <Configuration></Configuration>
              <RunFFmpeg selectedFiles={selectedFiles}></RunFFmpeg>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
