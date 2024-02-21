import React from "react";
import style from "./header.module.scss";
import HeaderButton from "./components/header-button/header-button";
import Search from "./components/search/search";
import logo from "../../assets/headerImg/header_logo.svg";
import { headetData } from "./components/header-data";
import MainHeader from "./mainHeader";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header ">
      <div className="container">
        <div className={style.header_container}>
          <div className={style.header_search_block}>
            <img src={logo} alt="logo" />
            <Search />
          </div>
          <HeaderButton />
        </div>
      </div>
      <hr />
      <div className="container">
        <ul className={style.header_list}>
          <li className={style.header_item}>
            <a className={style.header_link} href="#">
              {headetData.map((item) => (
                <MainHeader key={item.id} name={item.name} />
              ))}
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};
