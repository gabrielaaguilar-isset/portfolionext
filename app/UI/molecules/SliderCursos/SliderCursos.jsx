"use client";
import Link from "next/link";
import styles from './SliderCursos.module.css';
import { useEffect, useRef, useState } from 'react';


const SliderCursos = () => {


    const [certificadosJson, setCertificadosJson] = useState([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        fetch("/certificates.json")
            .then(res => res.json())
            .then(json => {
                setCertificadosJson(json);
            });
    }, []);

    const filtrarCertificados = (tipo) => {
        setFiltro(tipo);
    };

    const slideshow = useRef(null);

    const siguiente = () => {
      const targetas = slideshow.current; 
       
      if(targetas.children.length > 0){
          const primerElemento = targetas.children[0];
  
          const widthTargeta = primerElemento.offsetWidth;
          targetas.style.transition = `300ms ease-out all`;
          targetas.style.transform = `translateX(-${widthTargeta}px)`;
  
          const transicion= () => {
            targetas.style.transition = 'none';
            targetas.style.transform = `translateX(0)`;
  
            targetas.appendChild(primerElemento);
            targetas.removeEventListener('transitionend', transicion)
          }
          
          targetas.addEventListener('transitionend', transicion);
        }
    }
  
    const previos = () => {
      const targetas = slideshow.current; 
         
      if(targetas.children.length > 0){
          const index = targetas.children.length - 1;
          const ultimoElemento = targetas.children[index];
  
          targetas.insertBefore(ultimoElemento, targetas.firstChild);
          
          const widthTargeta = targetas.children[0].offsetWidth;
  
          targetas.style.transition = 'none';
          targetas.style.transform = `translateX(-${widthTargeta}px)`;
  
          setTimeout(() => {
            targetas.style.transition = '300ms ease-out all';
            targetas.style.transform = `translateX(0)`;
          }, 30);
      } 
  
    }
  
  

    

    return (
        <>
            <div className={styles.SliderCursos}>
                <div className={styles.SliderCursos_ContainerButtons} >

                    <button onClick={() => filtrarCertificados('Desarrollo web')} className={`${styles.SliderCursos__buttons} ${filtro === 'Desarrollo web' ? styles.buttonActive : ''}`}>DesarrolloWeb</button>
                    <button onClick={() => filtrarCertificados('Ingles')} className={`${styles.SliderCursos__buttons} ${filtro === 'Ingles' ? styles.buttonActive : ''}`}>Ingles</button>
                </div>
                <div className={styles.SliderCursos_Container} ref={slideshow}>
                    {certificadosJson
                        .filter(certificado => filtro === '' || certificado.type === filtro)
                        .map((content, index) => (
                            <div key={index} className={styles.SliderCursos_cursosItems}>
                                <h3 className={`${styles.SliderCursos_cursosItems__tittle}`}>
                                    <Link className={styles.targetsSpanLink} href={content.url} target="_blank" >{content.name}</Link> - {content.company}. <span className={styles.targetsSpan} >{content.id_credencial}</span>
                                </h3>
                            </div>
                        ))} 
                </div>
            </div>
            <div className={styles.ButtonsCards}>
                <button 
                    onClick={() => previos()}
                ><img src="/Arrow.svg" alt="anterior" className={styles.buttonAnterior} /></button>
                <button onClick={ () => siguiente() }><img src="/Arrow.svg" alt="previo" className={styles.buttonSiguiente} /></button>
            </div>
        </>
    );
};

export default SliderCursos;
