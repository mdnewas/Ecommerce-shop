import React from "react";
import Announcement from "../../Components/Announcement/Announcement";
import Catagories from "../../Components/Catagories/Catagories";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Catagories />
    </div>
  );
};

export default Home;
