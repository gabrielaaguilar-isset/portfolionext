import styles from './MarqueeBanner.module.css';
import Marquee from 'react-fast-marquee';

export const MarqueeBanner = () => {
  return (
    <Marquee  className={styles.MarqueeBannerContainer} gradient gradientColor="#1d1c20" pauseOnHover={true} speed="30">
          <div className={styles.MarqueeBanner__Item}>HTML</div>
          <div className={styles.MarqueeBanner__Item}>CSS</div>
          <div className={styles.MarqueeBanner__Item}>JavaScript</div>
          <div className={styles.MarqueeBanner__Item}>Wordpress</div>
          <div className={styles.MarqueeBanner__Item}>React</div>
          <div className={styles.MarqueeBanner__Item}>PHP</div>
          <div className={styles.MarqueeBanner__Item}>Figma</div>
          <div className={styles.MarqueeBanner__Item}>Photshop</div>
      </Marquee>
  )
}
