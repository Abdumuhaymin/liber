import React from "react";
import img1 from "../../assets/footer/footer_img1.svg";
import img2 from "../../assets/footer/footer_img2.svg";

import style from "./footer.module.scss";
import MainFooter from "./compononts/main-footer";
import { footerData } from "./compononts/footer-data";
import icons from "../../assets/footer/footer2_img1.svg";
import kart from "../../assets/footer/footer2_img2.svg";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.footer_card}>
          {footerData.map((item) => (
            <MainFooter
              key={item.id}
              title={item.title}
              a1={item.a1}
              a2={item.a2}
              a3={item.a3}
            />
          ))}
          <div className={style.box}>
            <h1 className={style.title}>Мобил илова</h1>
            <img className={style.img} src={img1} alt="img" /> <br />
            <img className={style.img} src={img2} alt="img" />
          </div>
        </div>
      </div>
      <div className={style.footer2}>
        <div className="container">
          <div className={ style.footer2_card}>
            <div className={style.footer2_box1}>
              <p className={style.footer2_box1_text}>Ижтимоий тармоқлар</p>
              <img className={style.footer2_box1_img} src={icons} alt="" />
            </div>
            <div className={style.footer2_box1}>
              <p className={style.footer2_box1_text}>Боғланиш</p>
              <p className={style.footer2_box1_num}>
                +998 90 253 77 53 support@liber.uz
              </p>
            </div>
            <div className={style.footer2_box1}>
              <p className={style.footer2_box1_text}>Биз қабул қиламиз</p>
              <img className={style.footer2_box1_img} src={kart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
