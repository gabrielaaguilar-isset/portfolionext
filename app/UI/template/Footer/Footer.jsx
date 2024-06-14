import styles from './Footer.module.css'
import Parrafos from '../../atoms/Parrafos/Parrafos'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
        <div className={styles.Footer_colunm1}>
          <Link href="https://www.linkedin.com/in/gabriela-aguilar01/" className={styles.Footer_colunm1__Links} >Linkedin</Link>
          <Link href="mailto:contacto.gabriela.guilar@gmail.com" className={styles.Footer_colunm1__Links}>Email</Link>
        </div>
        <div className={styles.Footer_colunm2}>
          <Parrafos text="Gabriela Aguilar © 2024" customClass={styles.Footer_copyText} /> 
        </div>
    </footer>
  )
}

export default Footer;