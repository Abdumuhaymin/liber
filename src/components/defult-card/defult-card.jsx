import React from "react";
import style from "./defult-card.module.scss";
const DefultCard = ({icon,title}) => {
  return (
    <div className={style.card_block}>
      <img src={icon} alt="icon" />
      <p className={style.card_title}>{title}</p>
    </div>
  );
};

export default DefultCard;
