import styles from './Parrafos.module.css'

const Parrafos = ({text, customClass}) => {
  return (
    <p className={`${styles.Parrafos} ${customClass}`}>{text}</p>
  )
}

export default Parrafos; 