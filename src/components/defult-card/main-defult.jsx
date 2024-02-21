import React from "react";
import style from "./defult-card.module.scss";
import img from "../../assets/defult/img1.svg";
import { defultData } from "./defult-data";
import DefultCard from "./defult-card";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import icon1 from "../../assets/defult/card.icon1.svg";
import icon2 from "../../assets/defult/card.icon2.svg";
import icon3 from "../../assets/defult/card.icon3.svg";
import icon4 from "../../assets/defult/card.icon4.svg";
import icon5 from "../../assets/defult/card.icon5.svg";
import icon6 from "../../assets/defult/card.icon6.svg";
const MainDefult = () => {
  return (
    <div className="container">
      <div className={style.MainDefult}>
        <img src={img} alt="img" />
        <div>
          <h1 className={style.name}>Суғдиёна Икромова</h1>
          <p className={style.number}>+998 90 253 77 53</p>
          <p className={style.id}>ID: 0001 Баланс: 45 000 сўм</p>
        </div>
      </div>
      <div className={style.defultcard}>
        <div className={style.card}>
          <Link to="/MainDefult">
            <div className={style.card_block}>
              <img src={icon1} alt="icon" />
              <p className={style.card_title}>Обуна бўлиш</p>
            </div>
          </Link>
          <Link to="/MainDefult/xisob">
            <div className={style.card_block}>
              <img src={icon2} alt="icon" />
              <p className={style.card_title}>Э-Хисоб</p>
            </div>
          </Link>
          <Link to="/MainDefult/kitoblar">
            <div className={style.card_block}>
              <img src={icon3} alt="icon" />
              <p className={style.card_title}>Китобларим</p>
            </div>
          </Link>
          <Link to="/MainDefult/saqlash">
            <div className={style.card_block}>
              <img src={icon4} alt="icon" />
              <p className={style.card_title}>Сақланганлар</p>
            </div>
          </Link>

          <Link to="/MainDefult/sozlamalar">
            <div className={style.card_block}>
              <img src={icon5} alt="icon" />
              <p className={style.card_title}>Созламалар</p>
            </div>
          </Link>
          <Link to="/MainDefult/tungirejim">
            <div className={style.card_block}>
              <img src={icon6} alt="icon" />
              <p className={style.card_title}>Тунги режим</p>
            </div>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainDefult;
