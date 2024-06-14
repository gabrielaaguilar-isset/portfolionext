import Parrafos from '../../atoms/Parrafos/Parrafos'
import styles from './ParaResaltar.module.css'

export const ParaResaltar = () => {
  return (
    <div className={styles.ParaResaltar}>
        <div className={styles.ParaResaltar_continerItem}>
            <img src='./titulo.webp' className={styles.ParaResaltar_continerItem_img} />
            <div className={styles.ParaResaltar_continerItem_text}>
                <h2 className={styles.ParaResaltar_continerItem_h2} >Técnico Superior Universitario en Informática</h2>
                <Parrafos text="Instituto Universitario de Tecnología 'Antonio Ricarte' " customClass={styles.ParaResaltar_continerItem_p} />
            </div>
        </div>

        <div className={styles.ParaResaltar_continerItem}>
            <img src='./ingles.webp' className={styles.ParaResaltar_continerItem_img} />
            <div className={styles.ParaResaltar_continerItem_text}>
                <h2 className={styles.ParaResaltar_continerItem_h2}>B1 Inglés </h2>
                <Parrafos text="Estudiante activa del idioma ingles" customClass={styles.ParaResaltar_continerItem_p}  />
            </div>
        </div>
        <div className={styles.ParaResaltar_continerItem}>
            <img src='./ingles.webp' className={styles.ParaResaltar_continerItem_img} />
            <div className={styles.ParaResaltar_continerItem_text}>
                <h2 className={styles.ParaResaltar_continerItem_h2}>Abierta a aprender nuevas tecnologias</h2>
                <Parrafos text="Estoy comprometida con el aprendizaje continuo y siempre busco integrar las últimas tecnologías en mis proyectos." customClass={styles.ParaResaltar_continerItem_p}  />
            </div>
        </div>
    </div>
  )
}
