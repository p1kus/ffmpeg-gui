import { spawn } from 'child_process'
import path from 'path'

export default function runFFmpeg(inputFile: string, outputFile: string, ...options): void {
  const exePath = path.join(process.env.HOME || '', 'scripts', 'ffmpeg')
  console.log('Options: ' + options)
  console.log(exePath)
  const fullCommand = `${exePath} -i "${inputFile}" -y -vf ${options ? options : ''} "${outputFile}"`
  console.log('Full FFmpeg command:', fullCommand)
  const ffmpegProcess = spawn(exePath, ['-i', inputFile, '-y', ...(options || ''), outputFile])
  console.log(ffmpegProcess)
  ffmpegProcess.stdout.on('data', (data) => {
    console.log(data)
  })
  ffmpegProcess.stderr.on('data', (data) => {
    console.error(data.toString())
  })
  ffmpegProcess.on('close', (code) => {
    if (code !== 0) {
      console.error(`Exited with code ${code}`)
    } else {
      console.log(`Success`)
    }
  })
  ffmpegProcess.on('error', (err) => {
    console.error(`Error spawning ffmpeg: ${err.message}`)
  })
}
