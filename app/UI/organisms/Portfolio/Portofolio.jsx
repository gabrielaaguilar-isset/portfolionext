import Parrafos from "../../atoms/Parrafos/Parrafos";
import { TituloYSub } from "../../atoms/TituloYSub/TituloYSub";
import { ProjectsCards } from "../../molecules/ProjectCards/ProjectsCards";
import styles from "./Portfolio.module.css";

export const Portofolio = () => {
  return (
    <div className={styles.Portofolio} id="MyPortfolio">
      <img src="/circulos.svg" alt="circulo que gira" className={styles.Portofolio_circulo}/>
      <div className={styles.Portofolio_Container}>
        <div className={styles.Portofolio_ContainerTitulos}>
          <TituloYSub
            customClassContainer={styles.Portofolio_ContainerTitle}
            subtitle="conoce Mi"
            customClassTitle={styles.Portofolio_subtitle}
            title="Portafolio"
            customClassSub={styles.Portofolio_title}
          />
          <Parrafos
            text="En esta sección encontrarás una selección de mis proyectos digitales, donde pongo en práctica mis habilidades y creatividad"
            customClass={styles.Portofolio_content}
          />
          <hr className={styles.Portofolio_ContainerTitulos_hr} />
        </div>

        <ProjectsCards />
      </div>
      <img src="/luz.svg" alt="circulo que gira" className={styles.Portofolio_luz}/>
    </div>
  );
};
