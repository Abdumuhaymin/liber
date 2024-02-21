import React from "react";
import style from "./header-button.module.scss";
import img1 from "../../../../assets/headerImg/flag.svg";
import img2 from "../../../../assets/headerImg/search.img2.svg";
import img3 from "../../../../assets/headerImg/people_icon.svg";
import { Link } from "react-router-dom";

const HeaderButton = () => {
  return (
    <div className={style.header_btn_block}>
      <div className={style.language}>
        <img src={img1} alt="" />
        <h2>Ўз</h2>
        <img src={img2} alt="" />
      </div>
      <Link to="/MainDefult">
        <div className={style.header_btn}>
          <img src={img3} alt="" />
          <h2>Кириш</h2>
        </div>
      </Link>
    </div>
  );
};

export default HeaderButton;
