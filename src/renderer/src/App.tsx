import { useRef, useState, useEffect } from 'react'
import styles from './assets/styles.module.scss'
// import TitleBar from './components/TitleBar'
// import useWindowsDimensions from './hooks/useWindowsDimensions'
import Splash from './components/Splash'

function App(): JSX.Element {
  const [url, setUrl] = useState<string>('');
  const webviewRef = useRef<HTMLWebViewElement>(null);
  const [disableWebviewPointer, setDisableWebviewPointer] = useState<boolean>(false);

  useEffect(() => {
    setUrl("web.whatsapp.com");
    setDisableWebviewPointer(false);
  }, []);

  return (
    <>
      {/* <TitleBar setUrl={setUrl} url={url} /> */}
      {url ? (
        <webview
          ref={webviewRef}
          src={`${url.includes('https://') ? '' : 'https://'}${url}`}
          className={`${styles['webPreviewContainer']}`}
          useragent="Mozilla/5.0 (X11; Linux x86_64; rv:132.0) Gecko/20100101 Firefox/132.0"
          style={{
            // height: "98vh",
            height: "100vh",
            pointerEvents: disableWebviewPointer ? 'none' : 'auto' // Disable/enable pointer events
          }}
        ></webview>
      ) : (
        <Splash />
      )}
    </>
  );
}


export default App
