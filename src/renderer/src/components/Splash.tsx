import styles from '../assets/styles.module.scss';
import LoadingIcon from '../assets/img/icon/loading.webp';

const Splash = (): JSX.Element => {
  return (
    <div className={`${styles['splash-container']}`} id="drag">
      <div className={`${styles['splash-view']}`} id="drag">
        <h1>WHATSAPP DESKTOP</h1>
        <img src={LoadingIcon} alt="" className="projectCoverIcon" />
      </div>
      
    </div>
  )
}

export default Splash
