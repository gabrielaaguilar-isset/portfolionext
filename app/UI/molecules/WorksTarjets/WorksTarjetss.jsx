import styles from './WorksTajertss.module.css';
import Parrafos from '../../atoms/Parrafos/Parrafos';

 
const WorksTarjetss = () => {
  return ( 
    <div className={styles.WorksTarjetss}> 

        <div className={styles.WorksTarjetss_Items}>
            <h2 className={styles.WorksTarjetss_Items_H2} >Desarrollo web independiente</h2>
            <Parrafos text="Creación de sitios web y aplicaciones web personalizadas utilizando Wordpress, Elementor, Figma y Photshop" customClass={styles.WorksTarjetss_Items_content} />
            <img src='/imgDesarrollo.webp' alt='imagen de Desarrollo web independiente' className={styles.WorksTarjetss_Items_img} />
            <Parrafos customClass={styles.WorksTarjetss_Items_textT} text="Enero 2022 - Actualidad" />
        </div>

        <div className={styles.WorksTarjetss_Items}>
            <h2 className={`${styles.WorksTarjetss_Items_H2} `} >Desarrollo web - Dilo Club</h2>
            <Parrafos text="Trabajo tiempo parcial donde se creo la pagina web de la academia, ademas de la creacion de la imagen de la marca Tubachi con  su pagina web" customClass={styles.WorksTarjetss_Items_content} />
            <img src='/dilo-negro.webp' alt='Dilo club' className={`${styles.WorksTarjetss_Items_img} ${styles.diloClubimg}`} />
            <Parrafos customClass={styles.WorksTarjetss_Items_textT} text="Diciembre 2023 - Marzo 2024" />
        </div>

        <div className={styles.WorksTarjetss_Items}>
            <h2 className={styles.WorksTarjetss_Items_H2} >Asistente Virtual | Desarrolladora Web -  The pole garage Costa Rica</h2>
            <Parrafos text=" Creación del sitio web informativo para la academia. Diseño de imágenes y creación de contenido para redes sociales. Responsable de la atención al cliente, gestionando consultas y proporcionando soporte eficiente a los clientes." customClass={styles.WorksTarjetss_Items_content} />
            <img src='/thepolegarage.webp' alt='the polegarage logo' className={styles.WorksTarjetss_Items_img} />
            <Parrafos customClass={styles.WorksTarjetss_Items_textT} text="Agosto 2023 - Marzo 2024" />
        </div>
    </div>
  )
}

export default WorksTarjetss;