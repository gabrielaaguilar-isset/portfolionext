import MarqueeServices from '../../molecules/MarqueeServices/MarqueeServices'
import { ParaResaltar } from '../../molecules/ParaResaltar/ParaResaltar'
import { TitleAboutMe } from '../../molecules/TitleAboutMe/TitleAboutMe'
import styles from './AboutMe.module.css'

export const AboutMe = () => {
  return (
    <div className={styles.AboutMe}>
        <TitleAboutMe />
        <MarqueeServices />
        <ParaResaltar />
    </div>
  )
}
