import styles from "../assets/titleBar.module.scss"
import closeIcon from "../assets/img/icon/close.svg"
import minimizeIcon from "../assets/img/icon/minimize.png"
import totrayIcon from "../assets/img/icon/toTray.png"

// Conditionally import ipcRenderer if Electron is available
const ipcRenderer = window?.require?.('electron')?.ipcRenderer;

const TitleBar = ({
}: {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>,
}): JSX.Element => {

  const handleClose = () => {
    console.log("closing window")
    if (ipcRenderer) {
      ipcRenderer.send('close-app');
    } else {
      console.warn("ipcRenderer is not available.");
    }
  };


  return (
    <nav className={`${styles['navbar']}`}>
      {/* // <nav className={`navbar bg-primary text-white p-2 border-bottom-dark sticky-top`} id="drag"> */}
      <div className={`${styles['container']}`}>
        <div className={`${styles['titlebar']}`}>
          <p>WhatsReapp</p>
        </div>

        <div className={`${styles['actionBtns']}`}>
          <button
            className={`${styles['toTrayBtn']}`}
            // onClick={() => setCloseWindow(false)}
          >
            <img src={totrayIcon} alt="TO_TRAY" />
          </button>
          <button
            className={`${styles['minimizeBtn']}`}
            // onClick={() => setCloseWindow(false)}
          >
            <img src={minimizeIcon} alt="MINIMIZE" />
          </button>
          <button
            className={`${styles['closeBtn']}`}
            onClick={handleClose}
          >
            <img src={closeIcon} alt="CLOSE" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default TitleBar
