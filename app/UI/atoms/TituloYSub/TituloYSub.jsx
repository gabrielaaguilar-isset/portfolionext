import styles from './TituloYSub.module.css'

export const TituloYSub = ({title, subtitle, customClassContainer, customClassTitle, customClassSub}) => {
  return (
    <div className={`${customClassContainer} ${styles.TituloYSub}`}>
        {subtitle ? <h3 className={`${customClassSub} ${styles.TituloYSub_sub}`}>{subtitle}</h3> : ""}
        <h2 className={`${customClassTitle} ${styles.TituloYSub_tit}`}>{title}</h2>
    </div>
  )
}
