import { Tarjetas } from '../../atoms/Tarjetas/Tarjetas'
import { TitleBanner } from '../../molecules/TitleBanner/TitleBanner'
import styles from './MainBanner.module.css'


export const MainBanner = () => {
  return (
    <div className={styles.MainBanner}>
      <TitleBanner />
      <Tarjetas />
    </div>
  )
}
