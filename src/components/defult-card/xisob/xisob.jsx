import React from "react";
import style from "./xisob.module.scss";
import icon from "../../../assets/defult/xisob/img1.svg";
import paymi from "../../../assets/defult/xisob/paymi.svg";
import click from "../../../assets/defult/xisob/click.svg";
import { Link } from "react-router-dom";

const Xisob = () => {
  return (
    <div className={style.card}>
      <h2>Э-Хисоб</h2>
      <div className={style.card_block}>
        <img src={icon} alt="" />
        <div className={style.sum}>
          <p>Баланс</p>
          <h3>45 000 сўм</h3>
        </div>
      </div>
      <Link to="/MainDefult/xisob2">
        <img src={paymi} alt="img" />
      </Link>
      <Link to="/MainDefult/xisob2">
        <img src={click} alt="img" />
      </Link>
    </div>
  );
};

export default Xisob;
