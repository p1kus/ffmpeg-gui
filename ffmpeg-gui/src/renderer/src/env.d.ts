/// <reference types="vite/client" />

export interface ElectronAPI {
  runFFmpeg: (input: string, output: string, options) => Promise<string>
  openFileDialog: (
    options?: Electron.OpenDialogSyncOptions
  ) => Promise<Electron.OpenDialogReturnValue>
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
  const electronAPI: ElectronAPI
}
