import React from "react";
import { useParams } from "react-router-dom";
import { newbooksData } from "../newbooks/newbooks-data";
import style from "../product-card/card.module.scss";
import icon from "../../assets/prodact/icon.svg";
import star from "../../assets/prodact/star.svg";
import coment from "../../assets/prodact/coment.svg";
import btnIcon1 from "../../assets/prodact/btn_icon1.svg";
import btnIcon2 from "../../assets/prodact/btn_icon2.svg";
import btnIcon3 from "../../assets/prodact/btn_icon3.svg";
import MainInfo from "./info/main-info";
import { infoData } from "../newbooks/newbooks-data";
import { bookData } from "../newbooks/newbooks-data";
import { Mainbooks } from "./info/main-info";
export const ProductCard = () => {
  const params = useParams();
  console.log(params);
  const result = newbooksData.find((item) => item.id == params.slug);
  console.log(result);
  return (
    <div className="container">
      <div className={style.prodact}>
        <img src={result.img} alt="img" />
        <div>
          <div className={style.card}>
            <div>
              <h1>{result.name}</h1>
              <p>{result.title}</p>
            </div>
            <div className={style.card_icon}>
              <img src={icon} alt="icon" />
              <img src={star} alt="img" />
              <img src={coment} alt="img" />
            </div>
          </div>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. <br /> <br />{" "}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. F
          </p>
          <div className={style.box}>
            <div>
              <p>Муаллиф</p>
              <h3>Kevin Smiley</h3>
            </div>
            <div>
              <p>Нашриёт</p>
              <h3>Wepress Inc.</h3>
            </div>
            <div>
              <p>Йил</p>
              <h3>1999</h3>
            </div>
          </div>
          <div style={{ borderTop: "3px dotted black" }}></div>
          <div className={style.btn_block}>
            <button>
              <span>
                <img src={btnIcon1} alt="img" />
              </span>
              Сотиб олиш - 65 000 сум
            </button>
            <button>
              <span>
                <img src={btnIcon2} alt="img" />
              </span>
              Аудио тинглаш - 55 000 сум
            </button>
            <button>
              <span>
                <img src={btnIcon3} alt="img" />
              </span>
              Онлайн укиш - 45 000 сум
            </button>
          </div>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.info_card}>
          <div className={style.info_card_title}>
            <h1>Маълумотлар</h1>
            <h1>Фикрлар</h1>
          </div>
          {infoData.map((item) => (
            <MainInfo key={item.id} {...item} />
          ))}
        </div>
        <div style={style.info_books}>
          <h1>Ўхшаш китоблар</h1>
          {bookData.map((item) => <Mainbooks key={item.id} {...item}/>)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
