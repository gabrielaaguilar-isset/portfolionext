"use client";
import Marquee from "react-fast-marquee";
import styles from "./MarqueeService.module.css";
import { useEffect, useState } from "react";
import { MarqueeTarjeta } from "../../atoms/MarqueeTarjetas/MarqueeTarjeta";

const MarqueeServices = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("/servicios.json")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);

        setServices(json);
      });
  }, []);

  return (
    <Marquee
      className={styles.MarqueeServices}
      gradient
      pauseOnHover={true}
      speed="30"
    
    >
      {services?.map((content, index) => {
    
        return (
          <MarqueeTarjeta
            key={index}
            text={content.servicio}
            img={content.img}
          />
          
        );
      })}
    </Marquee>
  );
};

export default MarqueeServices;
