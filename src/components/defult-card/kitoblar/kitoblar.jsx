import React from "react";
import style from "./kitoblar.module.scss";
import { useParams } from "react-router-dom";
import { bookData } from "../../newbooks/newbooks-data";
import { Mainbooks } from "../../product-card/info/main-info";
const Kitoblar = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className={style.book}>
      <h1>Сақланганлар</h1>
      <div className={style.book_card}>
        {bookData.map((item) => (
          <Mainbooks key={item.id} {...item} />
          
        ))}
        
      </div>
    </div>
  );
};

export default Kitoblar;
