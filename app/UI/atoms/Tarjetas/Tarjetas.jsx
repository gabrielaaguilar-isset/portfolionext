import Image from "next/image";
import styles from "./Tarjetas.module.css";
import { MarqueeBanner } from "../MarqueeBanner/MarqueeBanner";

export const Tarjetas = () => {
  return (
    <div className={styles.Tarjetas}>
      <div className={styles.Tarjetas_principal}>
        <h3 className={styles.Tarjetas_principal__texto}>
          <span className={styles.purpleSpan}>+3 </span>años de Experiencia
        </h3>
        <MarqueeBanner />
      </div>

      <div className={styles.Tarjetas_yo}>
      <Image
            src="/img.svg"
            alt="Imagen de Gabriela Aguilar"
            width="60"
            height="60"
            className={styles.Tarjeta_yo__Chiquita}
          />
      
        <div className={styles.Tarjetas_yo_purpleMitad}></div>
        <img
            src="/gabriela.svg"
            alt="Imagen de Gabriela Aguilar"
            className={styles.Tarjeta_yo__Grande}
          />
      </div>

      <div className={styles.Tarjetas_otra}>
        <h3 className={styles.Tarjetas_otraTexto}>
          Diseño personalizado adaptado a tu necesidades, consigue tu cita ahora
        </h3>
        <div className={styles.Tarjetas_otraContainerFlecha}>
          <img
            src="/flecha-banner.svg"
            alt="Imagen de Gabriela Aguilar"
            className={styles.Tarjetas_otra__flecha}
          />
        </div>
      </div>
    </div>
  );
};
