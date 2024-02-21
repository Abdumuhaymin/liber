import React from "react";
import icon from "../../../assets/defult/xisob/img1.svg";
import style from "../xisob/xisob.module.scss";

const Xisob2 = () => {
  return (
    <div className={style.card}>
      <h2>Хисобни тулдириш</h2>
      <div className={style.card_block}>
        <img src={icon} alt="" />
        <div className={style.sum}>
          <p>ID: 0001</p>
          <h3>45 000 сўм</h3>
        </div>
      </div>
      <h5>Сумма</h5>
      <input type="text" placeholder="Сум" /> <br />
      <button>Тулдириш</button>
    </div>
  );
};

export default Xisob2;
