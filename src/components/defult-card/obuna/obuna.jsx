import React from "react";
import img from "../../../assets/defult/obuna.svg";
import style from "./obuna.module.scss";
const Obuna = () => {
  return (
    <div className={style.card}>
      <div className={style.card_block1}>
        <img src={img} alt="" />
        <h1 className={style.card_block1_title}>Узингиз севган булимга обуна бўлинг </h1>
      </div>
      <div className={style.card_block2}>
        <div className={style.box1}>
         <h1>Обуна </h1>
         <h4>Обуна давом этиш вакти</h4>
         <select name="" id="">
          <option value="kun">1 kun</option>
          <option value="kun">2 kun</option>
          <option value="kun">3 kun</option>
         </select>
         <h4>Булимни танланг</h4>
         <select name="" id="">
          <option value="fantastik">fantastik</option>
         </select>
         <h3>Обуна 30 кун давом этади</h3>
        </div>
        <div className={style.box2}>
          <div className={style.summa}>
           <ul>
            <li>Бошланиш вакти</li>
            <li>Якунланиш вакти</li>
            <li>Обуна нархи</li>
           </ul>
           <ul>
            <li>12/09/2021</li>
            <li>12/10/2021</li>
            <li>12 000 сум</li>
           </ul>
          </div>
          <button>Обуна булиш</button>
        </div>
     
      </div>
    </div>
  );
};

export default Obuna;
