import React from "react";
import style from "./newbooks.module.scss";

const MainNewbooks = ({ img, name, title, icon1, num, icon2, icon3 }) => {
  return (
    
    <div className={style.newbooks}>
      <img className={style.newbooks_img} src={img} alt="img" />
      <h2 className={style.newbooks_name}>{name}</h2>
      <p className={style.newbooks_title}>{title}</p>
      <div className={style.newbooks_card}>
        <div className={style.newbooks_card1}>
          <img className={style.newbooks_icon1} src={icon1} alt="icon" />
          <h3 className={style.newbooks_num}>{num}</h3>
        </div>
        <div className={style.newbooks_card2}>
          <img className={style.newbooks_icon2} src={icon2} alt="icon" />
          <img className={style.newbooks_icon3} src={icon3} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default MainNewbooks;


