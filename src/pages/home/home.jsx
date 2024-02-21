import React from "react";
import { MainLayout } from "../../main-layout/main-Layout";
import HeroBanner from "../../components/banner/hero-banner";
import { heroData } from "../../components/banner/banner-data";
import style from "./home.module.scss";
import icon from "../../assets/heroImg/hero_icon.svg";
import icon2 from "../../assets/heroImg/btn_icon.svg";
import { MainServic } from "../../components/sevic/main-servic";
import { servicData } from "../../components/sevic/servic-data";
import { contentData } from "../../components/content/content-data";
import MainContent from "../../components/content/main-content";
import content_icon from "../../assets/content/content_icon.svg";
import newbooksicon from "../../assets/newbooks/newbooks_icon.svg";
import MainNewbooks from "../../components/newbooks/main-newbooks";
import { newbooksData } from "../../components/newbooks/newbooks-data";
import { newbooksData2 } from "../../components/newbooks/newbooks-data";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <section className="container">
        <div className={style.hero}>
          <div className={style.hero_banner}>
            <h2>Кўп ўқилаётганлар</h2>
            <img className={style.hero_icon} src={icon} alt="" />
            {heroData.map((item) => (
              <HeroBanner key={item.id} img={item.img} title={item.title} />
            ))}
            <img className={style.hero_icon} src={icon} alt="" />
          </div>
          <div className={style.card}>
            <h2 className={style.hero_card_title}>Китоб ўқишни ёқтирасизми?</h2>
            <p className={style.hero_card_text}>
              Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
            </p>
            <button className={style.hero_card_btn}>
              {" "}
              <img src={icon2} alt="" /> Обуна бўлиш
            </button>
          </div>
        </div>
      </section>
      <section className="container">
        <div className={style.servic}>
          {servicData.map((item) => (
            <MainServic
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>
      <section className="container">
        <div className={style.content}>
          <h1 className={style.title}>Рукнлар</h1>
          <div className={style.content_card}>
            {contentData.map((item) => (
              <MainContent key={item.id} img={item.img} title={item.title} />
            ))}
            <img className={style.content_img} src={content_icon} alt="img" />
          </div>
        </div>
      </section>
      <section className="container">
        <div className={style.newbooks}>
          <div className={style.newbooks_box}>
            <h2 className={style.newbooks_title}>Янги қўшилганлар</h2>
            <img src={newbooksicon} alt="icon" />
          </div>
          <div className={style.newbooks_card}>
            {newbooksData.map((item) => (
              <Link to={`/Newbooks/${item.id}`}>
                <MainNewbooks key={item.id} {...item} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <div className={style.newbooks}>
          <div className={style.newbooks_box}>
            <h2 className={style.newbooks_title}>Аудио китоблар</h2>
            <img src={newbooksicon} alt="icon" />
          </div>
          <div className={style.newbooks_card}>
            {newbooksData2.map((item) => (
              <Link to={`/Audiobooks/${item.id}`}>
                <MainNewbooks key={item.id} {...item} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
