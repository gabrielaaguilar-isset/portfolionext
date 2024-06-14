"use client"
import { useEffect, useState } from 'react';
import styles from './ProjectsCard.module.css';
import Parrafos from '../../atoms/Parrafos/Parrafos';

export const ProjectsCards = () => {

    const [works, setWorks] = useState();

    useEffect(() => {
      fetch("/works.json")
        .then((res) => res.json())
        .then((json) => {
  
            setWorks(json);
        });
    }, []);
  return (
 
    <div className={styles.ProjectsCards}>
        {works?.map((content, index) => {
            console.log(content)
            return (
                <div className={styles.ProjectsCards_item} key={index}>
                    <div className={styles.ProjectsCards_item_ContainerImg}>
                        <img src={content.img_Proyect} alt={content.nameProject} className={styles.ProjectsCards_img} />
                    </div>
                    
                    <h2 className={styles.ProjectsCards_h2}>{content.nameProject}</h2>
                    <Parrafos text={content.nameProject}  customClass={styles.ProjectsCards_p} />
                </div>
            
            );
        })}
    </div>
  )
}
