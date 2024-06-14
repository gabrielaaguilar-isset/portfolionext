import { TituloYSub } from '../../atoms/TituloYSub/TituloYSub'
import SliderCursos from '../../molecules/SliderCursos/SliderCursos'
import styles from './Certificados.module.css'

export const Certificados = () => {
  return (
    <div className={styles.Certificados}>
        <TituloYSub subtitle="" title="Certificados" customClassContainer={styles.Certificados_titleContainer}/>
        <SliderCursos />
    </div>
  )
}
