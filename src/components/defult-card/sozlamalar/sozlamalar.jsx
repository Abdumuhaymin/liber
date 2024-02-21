
import React from 'react'
import style from "./sozlama.module.scss"
import icon from "../../../assets/defult/xisob/icon.svg"
const Sozlamalar = () => {
  return (
    <div className={style.card}>
      <h2>Созламалар</h2>
      <div className={style.card_block}>
        <img src={icon} alt="" />
        <p>Сурат юклаш</p>
      </div>
      <h3>Исмингиз</h3>
      <input type="text" placeholder='Исмингиз' /> <br />
      <button>Сақлаш</button>
    </div>
  )
}

export default Sozlamalar
