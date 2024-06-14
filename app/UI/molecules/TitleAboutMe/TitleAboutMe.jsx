import Parrafos from '../../atoms/Parrafos/Parrafos'
import { TituloYSub } from '../../atoms/TituloYSub/TituloYSub'
import styles from './TitleAboutMe.module.css'

export const TitleAboutMe = () => {
  return (
    <div className={styles.TitleAboutMe}>
      <TituloYSub customClassContainer="" title="Sobre mí" customClassTitle="" subtitle="conoce un poco" customClassSub=""  />
      <Parrafos text="Soy una desarrolladora web con experiencia en React, WordPress, WooCommerce y e-learning, además de poseer conocimientos básicos en PHP. Mi formación incluye habilidades avanzadas en diseño utilizando herramientas como Photoshop y Figma. Me apasiona la programación, el diseño y el aprendizaje continuo, y disfruto trabajando en equipo y enfrentando nuevos desafíos. Mi objetivo es seguir creciendo profesionalmente como desarrolladora web y ofrecer soluciones innovadoras que satisfagan las necesidades y expectativas de los clientes. Estoy dispuesta a aprender y adaptarme a nuevas tecnologías para alcanzar este objetivo." customClass={styles.TitleAboutMe_text}/>
    </div>
  )
}
