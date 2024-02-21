import React from 'react'
import style from "./hero_banner.module.scss"
const HeroBanner = ({img,title}) => {
  return (
    <div className={style.banner1}>
      <img className={style.banner1_img} src={img} alt="img" />
      <p className={style.banner1_title}>{title}</p>
    </div>
  )
}

export default HeroBanner
