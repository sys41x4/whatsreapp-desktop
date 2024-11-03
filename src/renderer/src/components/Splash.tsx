import styles from '../assets/styles.module.scss';
import LogoIcon from '../assets/img/icon/logo.png';

const Splash = (): JSX.Element => {
  return (
    <div className={`${styles['splash-container']}`} id="drag">
      <div className={`${styles['splash-view']}`} id="drag">
        <h1>WHATSREAPP DESKTOP</h1>
        <img src={LogoIcon} alt="" className="projectCoverIcon" />
      </div>
      
    </div>
  )
}

export default Splash
