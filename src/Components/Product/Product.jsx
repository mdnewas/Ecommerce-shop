import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import "./Product.css";

const Product = ({ item }) => {
  return (
    <div className="product-container">
      <div className="circle"></div>
      <img className="productImage"  src={item.img} alt="" />
      <div className="product-info">
        <div className="icon">
          <ShoppingCartOutlined />
        </div>
        <div className="icon">
          <SearchOutlined />
        </div>
        <div className="icon">
          <FavoriteBorderOutlined />
        </div>

      </div>
    </div>
  );
};

export default Product;
