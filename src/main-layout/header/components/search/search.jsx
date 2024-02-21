import React from 'react'
import style from "./search.module.scss"
import img1 from "../../../../assets/headerImg/search.img1.svg"
import img2 from "../../../../assets/headerImg/search.img2.svg"
import img3 from "../../../../assets/headerImg/from_img.svg"


export const Search = () => {
  return (
    <div className={style.search}>
      <div className={style.search_card}>
       <img src={img1} alt="" />
       <h2 className={style.search_card_title}>Рукнлар</h2>
       <img src={img2} alt="" />
      </div>
      <div>
       <form className={style.input_form}>
        <input className={style.header_input} type="text"placeholder='Қидириш' />
        <div className={style.header_box}>
           <img src={img3} alt="" />
        </div>
       </form>
      </div>

    </div>
  )
}

export default Search
