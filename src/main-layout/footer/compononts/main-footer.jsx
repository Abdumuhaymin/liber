import React from 'react'
import style from "./footer.module.scss"
const MainFooter = ({title,a1,a2,a3}) => {
  return (
    <div className={style.footer}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.text}>{a1}</p>
      <p className={style.text}>{a2}</p>
      <p className={style.text}>{a3}</p>
    </div>
  )
}

export default MainFooter
