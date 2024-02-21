import React from 'react'
import style from "./servic.module.scss"
export const  MainServic = ({img,title,text}) => {
  return (
    <div className={style.servic}>
      <img  src={img} alt="img" />
      <div className={style.servic_card}>
       <h2 className={style.servic_title}>{title}</h2>
       <p className={style.servic_text}>{text}</p>
      </div>
    </div>
  )
}

