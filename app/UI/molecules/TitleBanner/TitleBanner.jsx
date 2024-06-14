import Link from "next/link";
import styles from "./TitleBanner.module.css";
import Parrafos from "../../atoms/Parrafos/Parrafos";

export const TitleBanner = () => {
  return (
    <div className={styles.TitleBanner}>
      <div className={styles.TitleBanner_saludo}>
        <p className={styles.TitleBanner_saludo__p}>¡Hola! mi nombre es </p>
      </div>

      <h2 className={styles.TitleBanner_titulo}>Gabriela Aguilar</h2>
      <h1 className={`${styles.TitleBanner_titulo} ${styles.purpleTitle}`}>Frontend Developer</h1>
      <Parrafos text='¡Bienvenido/a a mi sitio web! Aquí podrás descubrir mis proyectos digitales, las paginas web que he hecho y mis habilidades' customClass={styles.TitleBannerP} />

      <Link href="#" className={styles.whatsappButton} target='_blank'>WhatsApp</Link>
    
    </div>
  );
};
