import React from "react";
import { newbooksData2 } from "../../components/newbooks/newbooks-data";
import MainNewbooks from "../../components/newbooks/main-newbooks";
import { Link } from "react-router-dom";
const Audiobooks = () => {
  return (
    <div className="container" style={{ display: "flex",justifyContent: "space-between",marginTop: "50px",}}>
      {newbooksData2.map((item) => (
        <Link to={`/Audiobooks/${item.id}`}>
          <MainNewbooks key={item.id} {...item} />
        </Link>
      ))}
    </div>
  );
};

export default Audiobooks;
