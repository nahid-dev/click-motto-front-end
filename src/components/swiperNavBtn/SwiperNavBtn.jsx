import React from "react";
import { useSwiper } from "swiper/react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export const SwiperNavBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="z-30">
      <button
        className="  bg-white text-black rounded-full p-2  absolute left-0 z-10 top-1/2"
        onClick={() => swiper.slidePrev()}
      >
        <BsChevronLeft size={22}></BsChevronLeft>
      </button>
      <button
        className=" bg-white text-black rounded-full p-2  absolute right-0 z-10 top-1/2"
        onClick={() => swiper.slideNext()}
      >
        <BsChevronRight size={22}></BsChevronRight>
      </button>
    </div>
  );
};
