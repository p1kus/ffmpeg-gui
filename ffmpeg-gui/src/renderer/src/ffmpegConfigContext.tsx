import { createContext, useContext, useState } from 'react'

interface ffmpegConfigType {
  rotate?: {
    enabled: boolean
  }
  compress?: {
    enabled: boolean
  }
  extension: {
    extension: 'jpg' | 'png' | 'webp'
  }
}

interface ffmpegConfigContextType {
  config: ffmpegConfigType
  setConfig: React.Dispatch<React.SetStateAction<ffmpegConfigType>>
}

const ffmpegConfigContext = createContext<ffmpegConfigContextType | undefined>(undefined)

export const FfmpegConfigProvider = ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement => {
  const [config, setConfig] = useState<ffmpegConfigType>({
    rotate: {
      enabled: false
    },
    compress: {
      enabled: false
    },
    extension: {
      extension: 'jpg'
    }
  })
  return (
    <ffmpegConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ffmpegConfigContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFfmpegConfig = (): ffmpegConfigContextType => {
  const context = useContext(ffmpegConfigContext)
  if (context === undefined) {
    throw new Error('useFfmpegConfig must be used within a provider')
  }
  return context
}
