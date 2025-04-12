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
  // const [config, setConfig] = useState<configType>({
  //   rotate: {
  //     enabled: false
  //   },
  //   compress: {
  //     enabled: false
  //   },
  //   extension: {
  //     extension: 'jpg'
  //   }
  // })

  return (
    <div className={styles.container}>
      <div className={styles.fileContainer}>
        <div className={styles.fileContainerTitle}>
          <h3>FFmpeg converter</h3>
          <HorizontalLine></HorizontalLine>
        </div>
        <FilePicker setSelectedFiles={setSelectedFiles}></FilePicker>
        <ScrollAreaComponent selectedFiles={selectedFiles}></ScrollAreaComponent>
        <div className={styles.runBtn}>
          <HorizontalLine></HorizontalLine>
          <div className={styles.runBtnWithConfig}>
            <Configuration></Configuration>
            <RunFFmpeg selectedFiles={selectedFiles}></RunFFmpeg>
          </div>
        </div>
      </div>
      <div className={styles.selectedFilesContainer}></div>
    </div>
  )
}
