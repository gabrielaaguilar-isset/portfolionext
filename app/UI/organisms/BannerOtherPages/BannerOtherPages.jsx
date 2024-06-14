import Link from "next/link";
import styles from "./BannerOtherPages.module.css";
import Parrafos from "../../atoms/Parrafos/Parrafos";

export const BannerOtherPages = () => {
  return (
    <>
      <div className={styles.BannerOtherPages}>
        <div className={styles.BannerOtherPages_saludo}>
          <p className={styles.BannerOtherPages_saludo__p}>
            ¡Hola! mi nombre es{" "}
          </p>
        </div>

        <h2 className={styles.BannerOtherPages_titulo}>Gabriela Aguilar</h2>
        <h1
          className={`${styles.BannerOtherPages_titulo} ${styles.purpleTitle}`}
        >
          Frontend Developer
        </h1>
        <Parrafos
          text="¡Bienvenido/a a mi sitio web! Aquí podrás descubrir mis proyectos digitales, las paginas web que he hecho y mis habilidades"
          customClass={styles.BannerOtherPagesP}
        />

        <Link href="#" className={styles.whatsappButton} target="_blank">
          WhatsApp
        </Link>
      </div>
    </>
  );
};
