import React from "react";
import "./CatagorieItems.css";

const CatagoriesItems = ({ item }) => {
  return (
    <div className="cat-container">
       <img className="imgContainer" src={item.img} alt="" />
      <div className="info">
        <h1 className="cat-title">{item.title}</h1>
        <button className="cat-btn">SHOW NOW</button>
      </div>
    </div>
  );
};

export default CatagoriesItems;
