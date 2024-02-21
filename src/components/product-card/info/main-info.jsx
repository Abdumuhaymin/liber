import React from "react";
import style from "./info.module.scss";
const MainInfo = ({ title, info }) => {
  return (
    <div className={style.box}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.info}>{info}</p>
    </div>
  );
};

export default MainInfo;

export const Mainbooks = ({ img, name, title, icon }) => {
  return (
    <div className={style.books}>
      <img style={{width:"100px"}} src={img} alt="img" />
      <div className={style.card}>
        <h3>{name}</h3>
        <h4>{title}</h4>
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};
