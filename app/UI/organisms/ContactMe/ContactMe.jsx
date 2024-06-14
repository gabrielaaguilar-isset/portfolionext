
import Parrafos from '../../atoms/Parrafos/Parrafos';
import { TituloYSub } from '../../atoms/TituloYSub/TituloYSub';
import styles from './ContactMe.module.css'

const ContactMe = () => {

  return (
    <div className={styles.ContactMe}>
        <div className={styles.ContactMe_ContainImgLeft }>
            <img src="img-contacto.webp" className={styles.ContactMe_IMGL} />
        </div>
        <div className={styles.ContactMe_textContain}>
             <TituloYSub subtitle="¿Qué te parece si" title="Hablamos?" customClassContainer={styles.ContactMe_textContainTextoySub}/>
            <Parrafos text="Si quieres saber más sobre mí, mis habilidades y mis experiencias, puedes escribirme un correo o visitar mi perfil de Linkedin. Me encanta crear soluciones web innovadoras y eficientes.  😊😊" customClass="ddd" />
        </div>
        <div className={styles.ContactMe_ContainImgRigth }>
            <img src="img2-contacto.webp" className={styles.ContactMe_IMGR} />
        </div>
    </div>
  )
}

export default ContactMe;