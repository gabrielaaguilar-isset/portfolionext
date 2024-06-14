import { TituloYSub } from '../../atoms/TituloYSub/TituloYSub'
import WorksTarjetss from '../../molecules/WorksTarjets/WorksTarjetss'
import styles from './WorkExperiencie.module.css'

const WorkExperiencie = () => {
  return (
    <div className={styles.WorkExperiencie}>
        <TituloYSub customClassContainer={styles.WorkExperiencie_textoContainer} title="Experiencia Laboral" />
        <WorksTarjetss  />
        
        
    </div>
  )
}

export default WorkExperiencie