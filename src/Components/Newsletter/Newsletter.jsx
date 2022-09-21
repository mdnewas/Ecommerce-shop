import { Send } from "@mui/icons-material";
import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsContainer">
      <h1 className="nTitle"> Newsletter </h1>
      <p className="nDesc"> Get timely updates from your favorite products </p>
      <div className="nInput">
        <input type="email" placeholder="Enter your email" className="n-input"  name="user_email" id="" />
        <button className="nBtn">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
