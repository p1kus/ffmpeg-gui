import FFmpegConverter from './components/FFmpegConverter'
import styles from './App.module.css'
import { ReactElement } from 'react'
import Footer from './components/footer/footer'

function App(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <div className="actions">
          <FFmpegConverter></FFmpegConverter>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default App
