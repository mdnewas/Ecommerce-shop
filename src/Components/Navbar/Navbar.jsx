import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import "./Navbar.css";

// import styled from 'styled-components'

// const Container = styled.div`
//     height: 60px ;
// `

// const Wrapper = styled.div`
// `

const Navbar = () => {
  return (
    <div className="container">
         {/* Navbar */}
      <div className="wrapper">
        {/* left side */}
        <div className="nav-left">
          <span>EN</span>
          <div className="search">
            <input type="text" className="input" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>

        {/* middle side */}
        <div className="nav-middle">
          <div className="logo">
            <h1>NEWAS</h1>
          </div>
        </div>
        {/* right side */}
        <div className="nav-right">
          <div className="menu-item">REGISTER</div>
          <div className="menu-item">SIGN IN</div>
          <div className="menu-item">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
