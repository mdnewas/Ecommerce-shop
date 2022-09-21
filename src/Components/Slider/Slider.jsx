import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Pagination, Mousewheel, Keyboard,} from "swiper";

import { sliderItems } from "../../data";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
       scrollbar={{
        hide: true,
      }}
      cssMode={true}
      navigation={true}
      pagination={ {clickable: true}}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="swiper-slide"
      >
        {sliderItems.map((props) => {
          return (
            <SwiperSlide style={{ backgroundColor: props.bg }}>
              {/* <div className="s-wrapper"> */}
              <div className="s-left">
                <img src={props.img} alt="" />
              </div>
              <div className="s-right">
                <h1 className="s-title">{props.title}</h1>
                <p className="s-desc">{props.desc}</p>
                <button className="s-btn">SHOW NOW</button>
              </div>
              {/* </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
