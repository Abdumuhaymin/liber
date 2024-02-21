import React from 'react'
import style from "./content.module.scss"
const MainContent = ({img,title}) => {
  return (
    <div className={style.content}>
      <img className={style.img}  src={img} alt="img" />
      <p className={style.title}>{title}</p>
    </div>
  )
}

export default MainContent
