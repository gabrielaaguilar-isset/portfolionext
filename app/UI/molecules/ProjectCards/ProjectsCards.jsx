"use client";
import { useEffect, useState } from 'react';
import styles from './ProjectsCard.module.css';
import Parrafos from '../../atoms/Parrafos/Parrafos';
import Link from 'next/link';

export const ProjectsCards = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch("/works.json")
      .then((res) => res.json())
      .then((json) => {
        setWorks(json);
      });
  }, []);

  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={styles.ProjectsCards}>
      {works?.map((content, index) => {
        const isExpanded = expanded[index];
        return (
          <div className={styles.ProjectsCards_item} key={index}>
            <div className={styles.ProjectsCards_item_ContainerImg}>
              <img src={content.img_Proyect} alt={content.nameProject} className={styles.ProjectsCards_img} />
            </div>
            <Link href={content.url} className={styles.ProjectsCards_h2}>{content.nameProject}</Link>
            <Parrafos
              text={isExpanded ? content.descripcion : `${content.descripcion.substring(0, 100)}...`}
              customClass={styles.ProjectsCards_p}
            />
            <button
              onClick={() => handleExpandClick(index)}
              className={styles.expandButton}
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsCards;
