import React from "react";
import Announcement from "../Components/Announcement/Announcement";
import Catagories from "../Components/Catagories/Catagories";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Newsletter from "../Components/Newsletter/Newsletter";
import Products from "../Components/Products/Products";
import Slider from "../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Catagories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
