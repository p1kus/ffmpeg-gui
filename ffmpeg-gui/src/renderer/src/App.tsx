import electronLogo from './assets/electron.svg'
import FFmpegConverter from './components/FFmpegConverter'

function App(): JSX.Element {
  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="text">
        Image conversion using <span className="react">FFmpeg</span>
      </div>
      <div className="actions">
        <FFmpegConverter></FFmpegConverter>
        <div className="action"></div>
      </div>
    </>
  )
}

export default App
