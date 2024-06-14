import style from './MarqueeTarjeta.module.css'

export const MarqueeTarjeta = ({text, img, alt}) => {
  return (
    <div className={style.MarqueeTarjeta}>
        <img src={img} alt={alt} className={style.MarqueeTarjeta_img} /> 
        <h4 className={style.MarqueeTarjeta_text}>{text}</h4>
    </div>
  )
}
